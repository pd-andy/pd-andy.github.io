module Content.Nav exposing (..)

-- IMPORTS ---------------------------------------------------------------------
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)

-- FUNCTIONS -------------------------------------------------------------------
list : List (Html msg) -> Html msg
list children =
  nav [ id "nav", class "flex flex-col items-center justify-center" ] children

item : String -> (String -> msg) -> { r | id : String, colour : String } -> Html msg
item focusedSection msg{ id, colour } =
  button
    [ class <| if focusedSection == id then "text-" ++ colour ++ "-600" else "text-gray-900"
    , class "font-bold text-lg"
    , class "my-2"
    , onClick <| msg id
    ]
    [ text id
    ]