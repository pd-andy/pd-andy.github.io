port module Main exposing (Model, Msg, update, view, subscriptions, init)

import Browser
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Section exposing (Section)

-- PORTS -----------------------------------------------------------------------
-- 
port onFocusChange : (String -> msg) -> Sub msg
--
port scrollToElement : String -> Cmd msg

-- MAIN ------------------------------------------------------------------------
--
main : Program () Model Msg
main =
  Browser.element
    { init = init
    , view = view
    , update = update
    , subscriptions = subscriptions
    }

-- MODEL -----------------------------------------------------------------------
--
type alias Model =
  { focusedElement : String
  , sections : List Section
  }

--
init : flags -> (Model, Cmd Msg)
init flags = 
  ( { focusedElement = "about"
    , sections =
      [ Section.about
      , Section.education
      , Section.experience
      , Section.projects
      , Section.skills
      ]
    }
  , Cmd.none
  )

-- UPDATE ----------------------------------------------------------------------
--
type Msg
  = FocusedElement String
  | ScrollTo String

--
update : Msg -> Model -> (Model, Cmd Msg)
update msg model =
  case msg of
    FocusedElement id ->
      ( { model | focusedElement = id }
      , Cmd.none
      )

    ScrollTo id ->
      ( model
      , scrollToElement id
      )

-- VIEW ------------------------------------------------------------------------
--
view : Model -> Html Msg
view model =
  div [ id "app" ]
    [ aside [ class "flex flex-col items-center justify-around bg-gray-200 text-gray-900 px-10" ]
      [ div [] 
        [ h1 [ class "text-3xl" ] [ text "Andrew Thompson" ]
        , h2 [ class "text-xl mb-4" ] [ text "PhD student @ Queen Mary University of London" ]
        , p [ class "text-justify" ] [ text <| "This is some more information about me. It should "
          ++ "span multiple lines so I can see how everything will end up being "
          ++ "arranged." ]
        ]
      , nav [ class "flex flex-col items-center justify-center" ]
        <| List.map (navButton model.focusedElement) model.sections
      ]
    , main_ [ class "bg-gray-100" ]
        <| List.map Section.view model.sections
    ]
    
--
navButton : String -> Section -> Html Msg
navButton focusedSectionId section =
  let
    activeColour = "text-" ++ section.bgColour ++ "-600"
  in
  button
    [ class "my-2 font-bold text-lg"
    , class <| if focusedSectionId == section.id then activeColour else "text-gray-900"
    , onClick <| ScrollTo section.id
    ]
    [ text section.id ]

-- SUBSCRIPTIONS ---------------------------------------------------------------
--
subscriptions : Model -> Sub Msg
subscriptions model =
  Sub.batch
    [ onFocusChange FocusedElement
    ]
