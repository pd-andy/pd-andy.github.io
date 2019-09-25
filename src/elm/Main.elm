module Main exposing (Model, Msg, update, view, subscriptions, init)

import Browser
import Html exposing (..)
import Html.Attributes exposing (..)

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
  {
  }

--
init : flags -> (Model, Cmd Msg)
init flags = 
  ( Model
  , Cmd.none
  )

-- UPDATE ----------------------------------------------------------------------
--
type Msg
  = Msg1
  | Msg2

--
update : Msg -> Model -> (Model, Cmd Msg)
update msg model =
  case msg of
    Msg1 ->
      ( model
      , Cmd.none
      )

    Msg2 ->
      ( model
      , Cmd.none
      )

-- VIEW ------------------------------------------------------------------------
--
view : Model -> Html Msg
view model =
  div [ id "app" ]
    [ aside [ class "flex flex-col items-center justify-around bg-gray-200 text-gray-900" ]
      [ div [] 
        [ h1 [ class "text-3xl" ] [ text "Andrew Thompson" ]
        , h2 [ class "text-xl" ] [ text "PhD student @ Queen Mary University of London" ]
        ]
      , nav [ class "flex flex-col items-center justify-center" ]
        [ button [ class "my-2" ] [ text "about" ]
        , button [ class "my-2" ] [ text "education" ]
        , button [ class "my-2" ] [ text "experience" ]
        , button [ class "my-2" ] [ text "projects" ]
        , button [ class "my-2" ] [ text "skills" ]
        ]
      ]
    , main_ [ class "bg-gray-100" ]
      [ about
      , education
      , experience
      , projects
      , skills
      ]
    ]

--
about : Html Msg
about =
  div [ class "bg-blue-500" ]
    [ text "about" ]

--
education : Html Msg
education =
  div [ class "bg-orange-500" ]
    [ text "education" ]

--
experience : Html Msg
experience =
  div [ class "bg-green-500" ]
    [ text "experience" ]

--
projects : Html Msg
projects =
  div [ class "bg-indigo-500" ]
    [ text "projects" ]

--
skills : Html Msg
skills =
  div [ class "bg-yellow-500" ]
    [ text "skills" ]

-- SUBSCRIPTIONS ---------------------------------------------------------------
--
subscriptions : Model -> Sub Msg
subscriptions model =
  Sub.none
