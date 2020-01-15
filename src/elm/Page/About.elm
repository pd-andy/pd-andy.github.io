module Page.About exposing
  ( view
  )

{- Imports ------------------------------------------------------------------ -}
import Browser
import Html exposing (Html, Attribute)
import Html.Attributes
import Html.Events

{- Types -------------------------------------------------------------------- -}
type alias Data =
  {
  }

type alias Events =
  {
  }

type alias Project =
  { name : String
  , tech : List String
  , image : Maybe String
  , description : List String
  , theme :
    { bg : String
    , border : String
    , text : String
    }
  }

type alias Role =
  { title : String
  , date : String
  , location : String
  }

{- Constants ---------------------------------------------------------------- -}
projects : List Project
projects =
  [ { name = "flow"
    , tech = [ "javascript", "framework", "web audio api" ]
    , image = Just "img/flow-img.png"
    , description = [ "" ]
    , theme =
      { bg = "brand"
      , border = "black"
      , text = "white"
      }
    }
  , { name = "elm-web-audop"
    , tech = [ "elm", "library", "web audio api" ]
    , image = Nothing
    , description = [ "" ]
    , theme =
      { bg = "gray-darkest"
      , border = "cta"
      , text = "white"
      }
    }
  ]

education : List Role
education =
  [ { title = "PhD Media & Arts Technology"
    , date = "2017 – 2021"
    , location = "Queen Mary University of London"
    }
  , { title = "MA Computational Art"
    , date = "2016 – 2017"
    , location = "Goldsmiths, University of London"
    }
  , { title = "Ba(Hons) Creative Music Technology"
    , date = "2013 – 2016"
    , location = "Bath Spa University"
    }
  ]

employment : List Role
employment =
  [ { title = "Lead Demonstrator – The Semantic Web"
    , date = "January 2019 – May 2019, January 2020 – May 2020"
    , location = "Queen Mary University of London"
    }
  , { title = "Demonstrator – Introduction to Coding"
    , date = "July 2019, September 2019"
    , location = "Institute of Coding"
    }
  ]

{- View --------------------------------------------------------------------- -}
view : Data -> Events -> Browser.Document msg
view model events =
  { title = "Andrew Thompson"
  , body =
    -- Greeting ----------------------------------------------------------------
    [ Html.section
      [ Html.Attributes.class "min-h-screen py-32 px-24 text-brand" ]
      [ Html.p
        [ Html.Attributes.class "text-8xl font-bold mb-24" ]
        [ Html.text "Hi." ]
      , Html.p
        [ Html.Attributes.class "text-6xl mb-4" ]
        [ Html.text "I'm a "
        , Html.a 
          [ Html.Attributes.class "hover:wavy underline hover:text-black" ] 
          [ Html.text "PhD student" ]
        , Html.text 
            <| " at Queen Mary University of London. I'm also a front-end Web "
            ++ "developer that speaks "
        , Html.a 
          [ Html.Attributes.class "hover:wavy underline hover:text-black" ] 
          [ Html.text "Javascript" ]
        , Html.text " and "
        , Html.a 
          [ Html.Attributes.class "hover:wavy underline hover:text-black" ] 
          [ Html.text "Elm" ]
        , Html.text "."
        ]
      , Html.div
        [ Html.Attributes.class "flex justify-center mt-24" ]
        [ Html.button
          [ Html.Attributes.class 
              <| "mx-auto my-4 p-4 rounded-lg bg-brand text-white shadow-lg "
              ++ "hover:bg-brand-dark text-2xl" 
          ]
          [ Html.text "What I do | ↓" ]
        ]
      ]
    -- What I do ---------------------------------------------------------------
    , Html.section
      [ Html.Attributes.class "min-h-screen py-32 px-24 bg-cta text-white" ]
      [ Html.p
        [ Html.Attributes.class "text-6xl mb-24" ]
        [ Html.text 
            <| "My research looks at programming language design and investigates "
            ++ "how different language features impact how we code." 
        ]
      , Html.p
        [ Html.Attributes.class "text-6xl mb-24" ]
        [ Html.text
            <| "I have a particular interest in audio programming on the Web and "
            ++ "I'm a member of the Centre for Digital Music research group."
        ]
      , Html.div
        [ Html.Attributes.class "flex justify-center mt-24" ]
        [ Html.button
          [ Html.Attributes.class 
              <| "mx-auto my-4 p-4 rounded-lg bg-white text-black shadow-lg "
              ++ "hover:bg-black hover:text-cta text-2xl" 
          ]
          [ Html.text "What I've made | ↓" ]
        ]
      ]
    -- What I've done ----------------------------------------------------------
    , Html.section
      [ Html.Attributes.class "min-h-screen py-32 bg-gray-lightest text-black" ]
      [ Html.div
        [ Html.Attributes.class 
            <| "mr-64 mb-24 px-24 py-8 bg-brand text-white "
            ++ "text-left border-r-8 border-b-8 rounded-br border-black shadow-lg " 
        ]
        [ Html.h2
          [ Html.Attributes.class "text-6xl font-bold border-b-4 mb-8" ]
          [ Html.text "flow" ]
        , Html.p
          [ Html.Attributes.class "text-3xl text-justify" ]
          [ Html.text "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pharetra molestie blandit. Ut eros nulla, mollis in orci ac, consequat vulputate sapien. Nam mattis lacus sed nisl imperdiet rutrum. Cras velit tortor, maximus euismod arcu a, dictum convallis lectus. Suspendisse dui ante, commodo et elit commodo, consequat finibus leo. Etiam sapien risus, aliquet nec elit ac, pharetra imperdiet diam. Donec imperdiet leo a orci ornare porttitor. Pellentesque in tempus urna. Mauris pharetra molestie risus ac aliquam. Cras lobortis aliquet tincidunt. Morbi eu luctus purus." ]
        ]
      , Html.div
        [ Html.Attributes.class 
            <| "ml-64 mb-24 px-24 py-8 bg-black text-white text-right "
            ++ "border-l-8 border-b-8 rounded-bl border-cta shadow-lg" 
        ]
        [ Html.h2
          [ Html.Attributes.class "text-6xl font-bold border-b-4 mb-8" ]
          [ Html.text "elm-web-audio" ]
        , Html.p
          [ Html.Attributes.class "text-3xl text-justify" ]
          [ Html.text "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pharetra molestie blandit. Ut eros nulla, mollis in orci ac, consequat vulputate sapien. Nam mattis lacus sed nisl imperdiet rutrum. Cras velit tortor, maximus euismod arcu a, dictum convallis lectus. Suspendisse dui ante, commodo et elit commodo, consequat finibus leo. Etiam sapien risus, aliquet nec elit ac, pharetra imperdiet diam. Donec imperdiet leo a orci ornare porttitor. Pellentesque in tempus urna. Mauris pharetra molestie risus ac aliquam. Cras lobortis aliquet tincidunt. Morbi eu luctus purus." ]
        ]
      , Html.hr
        [ Html.Attributes.class "mx-64 border-2 border-gray-darkest" ]
        []
      ]
    -- What I know -------------------------------------------------------------
    , Html.section
      [ Html.Attributes.class "min-h-screen bg-gray-lightest py-32 px-24 text-gray-darkest" ]
      ( List.concat
        [ [ Html.h1
            [ Html.Attributes.class "text-7xl font-bold underline mb-8 text-black" ]
            [ Html.text "What I know." ]
          ]
        , viewRoles education
        , [ Html.hr
            [ Html.Attributes.class "mx-64 border-2 border-gray-darkest" ]
            []
          ]
        ]        
      )
    -- Where I've been ---------------------------------------------------------
    , Html.section
      [ Html.Attributes.class "min-h-screen bg-gray-lightest py-32 px-24 text-gray-darkest" ]
      ( List.concat
          [ [ Html.h1
              [ Html.Attributes.class "text-7xl font-bold underline mb-8 text-black" ]
              [ Html.text "Where I've been." ]
            ]
          , viewRoles employment
          ]
      )
    ]
  }

viewProjects : List Project -> List (Html msg)
viewProjects =
  List.indexedMap (\i { name, tech, image, description, theme } ->
   if modBy 2 i == 0 then
    Html.div
      [ Html.Attributes.class 
          <| "mr-64 mb-24 px-24 py-8 text-left shadow-lg " 
          ++ "bg-" ++ theme.bg ++ " text-" ++ theme.text ++ " "
          ++ "border-r-8 border-b-8 rounded-br border-" ++ theme.border
      ]
      [ Html.h2
        [ Html.Attributes.class "text-6xl font-bold border-b-4 mb-8" ]
        [ Html.text name ]
      , Html.div
        [ Html.Attributes.class "text-3xl text-justify" ]
        ( List.concat
          [ [ Html.p
              []
              [ Html.text (List.head description |> Maybe.withDefault "") ]
            , case image of
                Just src ->
                  Html.img
                  [ Html.Attributes.src src
                  , Html.Attributes.class "float-right w-64"
                  ] []
                Nothing ->
                  Html.text ""
            ]
          , description |> List.drop 1 |> List.map (\p ->
              Html.p
                []
                [ Html.text p ]
            )
          ]
        )
      ]
   else
    Html.div
      [ Html.Attributes.class 
          <| "ml-64 mb-24 px-24 py-8 text-right shadow-lg " 
          ++ "bg-" ++ theme.bg ++ " text-" ++ theme.text ++ " "
          ++ "border-l-8 border-b-8 rounded-lr border-" ++ theme.border
      ]
      [ Html.h2
        [ Html.Attributes.class "text-6xl font-bold border-b-4 mb-8" ]
        [ Html.text name ]
      , Html.div
        [ Html.Attributes.class "text-3xl text-justify" ]
        ( List.concat
          [ [ Html.p
              []
              [ Html.text (List.head description |> Maybe.withDefault "") ]
            , case image of
                Just src ->
                  Html.img
                  [ Html.Attributes.src src
                  , Html.Attributes.class "float-right w-64"
                  ] []
                Nothing ->
                  Html.text ""
            ]
          , description |> List.drop 1 |> List.map (\p ->
              Html.p
                []
                [ Html.text p ]
            )
          ]
        )
      ]
  )

viewRoles : List Role -> List (Html msg)
viewRoles =
  List.indexedMap (\i { title, date, location } ->
    if modBy 2 i == 0 then
      Html.div
        [ Html.Attributes.class "mb-10 text-left" ]
        [ Html.h2
          [ Html.Attributes.class "text-6xl" ]
          [ Html.text title ]
        , Html.span
          [ Html.Attributes.class "block text-3xl" ]
          [ Html.text date ]
        , Html.span
          [ Html.Attributes.class "block text-3xl text-black font-bold" ]
          [ Html.text location ]
        ]
    else
      Html.div
        [ Html.Attributes.class "mb-10 text-right" ]
        [ Html.h2
          [ Html.Attributes.class "text-6xl" ]
          [ Html.text title ]
        , Html.span
          [ Html.Attributes.class "block text-3xl" ]
          [ Html.text date ]
        , Html.span
          [ Html.Attributes.class "block text-3xl text-black font-bold" ]
          [ Html.text location ]
        ]
  )
