port module Main exposing (Model, Msg, update, view, subscriptions, init)

import Browser
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)

import Content.Nav
import Content.Socials exposing (SocialMedia)
import Content.Sections exposing (Section)


-- PORTS -----------------------------------------------------------------------
-- 
port onFocusChange : (String -> msg) -> Sub msg
--
port scrollToElement : String -> Cmd msg

-- MAIN ------------------------------------------------------------------------
--
main : Program Flags Model Msg
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
  , socials : List SocialMedia
  }

--
type alias Flags =
  { images :
    { do : String
    , flow : String
    }
  }

--
init : Flags -> (Model, Cmd Msg)
init flags = 
  ( { focusedElement = "about"
    , sections =
      [ Content.Sections.about
      , Content.Sections.education
      , Content.Sections.experience
      , Content.Sections.projects flags.images.do
      , Content.Sections.skills
      ]
    , socials = Content.Socials.all
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
    [ aside [ class "flex flex-col items-center justify-around bg-gray-100 text-gray-900 px-10" ]
      [ div [] 
        [ h1 [ class "text-3xl" ] [ text "Andrew Thompson" ]
        , h2 [ class "text-xl mb-4" ] [ text "PhD student @ Queen Mary University of London" ]
        , Content.Socials.list model.socials
        ]
      , Content.Nav.list 
          <| List.map (Content.Nav.item model.focusedElement ScrollTo) model.sections
      ]
    , main_ [ class "shadow-xl" ]
        <| List.map Content.Sections.view model.sections
    ]

-- SUBSCRIPTIONS ---------------------------------------------------------------
--
subscriptions : Model -> Sub Msg
subscriptions model =
  Sub.batch
    [ onFocusChange FocusedElement
    ]
