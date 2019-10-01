module Content.Nav exposing (..)

-- IMPORTS ---------------------------------------------------------------------
import Colour exposing (Colour)
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)

-- FUNCTIONS -------------------------------------------------------------------
list : List (Html msg) -> Html msg
list children =
  nav [ id "nav", class "flex flex-col items-center justify-center" ] children

item : String -> (String -> msg) -> { r | id : String, colour : Colour } -> Html msg
item focusedSection msg { id, colour } =
  button
    [ class <| if focusedSection == id then Colour.toText colour else "text-gray-900"
    , class <| Colour.toHover colour
    , class "font-bold text-xl my-2"
    , onClick <| msg id
    ]
    [ text id
    ]