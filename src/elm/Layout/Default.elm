module Layout.Default exposing
  ( view
  )

{- Imports ------------------------------------------------------------------ -}
import Browser
import Html exposing (Html, Attribute)
import Html.Attributes
import Html.Events

{- Types -------------------------------------------------------------------- -}


{- Constants ---------------------------------------------------------------- -}


{- View --------------------------------------------------------------------- -}
view : Browser.Document msg ->  Browser.Document msg
view { title, body } =
  { title = title
  , body =
    [ Html.header
      [ Html.Attributes.class 
          <| "flex justify-between fixed top-0 bg-white h-24 w-full px-8 "
          ++ "items-center" 
      ]
      [ Html.h1
        [ Html.Attributes.class "text-4xl font-bold text-gray-darkest" ]
        [ Html.text "Andrew Thompson" ]
      , Html.li
        [ Html.Attributes.class "flex flex-row text-2xl text-gray" ]
        [ Html.a
          [ Html.Attributes.class "ml-4 hover:text-gray-darker hover:underline"
          , Html.Attributes.href "" 
          ]
          [ Html.text "About" ]
        , Html.a
          [ Html.Attributes.class "ml-4 hover:text-gray-darker hover:underline"
          , Html.Attributes.href "" 
          ]
          [ Html.text "Projects" ]
        , Html.a
          [ Html.Attributes.class "ml-4 hover:text-gray-darker hover:underline"
          , Html.Attributes.href "" 
          ]
          [ Html.text "Publications" ]
        , Html.a
          [ Html.Attributes.class "ml-4 hover:text-gray-darker hover:underline"
          , Html.Attributes.href "" 
          ]
          [ Html.text "Blog" ]
        ]
      ]
    , Html.main_
      []
      body
    , Html.footer
      [ Html.Attributes.class "h-64 bg-black" ]
      []
    ]
  }