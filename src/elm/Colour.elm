module Colour exposing (..)

type Colour
  = Gray
  | Red
  | Orange
  | Yellow
  | Green
  | Teal
  | Blue
  | Indigo
  | Purple
  | Pink

--
toBackground : Colour -> String
toBackground colour =
  case colour of
    Gray -> "bg-gray-100"
    Red -> "bg-red-100"
    Orange -> "bg-orange-100"
    Yellow -> "bg-yellow-100"
    Green -> "bg-green-100"
    Teal -> "bg-teal-100"
    Blue -> "bg-blue-100"
    Indigo -> "bg-indigo-100"
    Purple -> "bg-purple-100"
    Pink -> "bg-pink-100"

--
toText : Colour -> String
toText colour =
  case colour of
    Gray -> "text-gray-600"
    Red -> "text-red-600"
    Orange -> "text-orange-600"
    Yellow -> "text-yellow-600"
    Green -> "text-green-600"
    Teal -> "text-teal-600"
    Blue -> "text-blue-600"
    Indigo -> "text-indigo-600"
    Purple -> "text-purple-600"
    Pink -> "text-pink-600"
