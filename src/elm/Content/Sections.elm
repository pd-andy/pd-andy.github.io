module Content.Sections exposing (..)

-- IMPORTS ---------------------------------------------------------------------
import Colour exposing (Colour(..))
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)

-- TYPES -----------------------------------------------------------------------
type alias Section =
  { id : String
  , colour : Colour
  , heading : String
  , content : List Content
  }

type Content
  = Paragraph String
  | Subheading String
  | Code (List String)
  | University
    { degree : String
    , university : String
    , when : String
    }
  | Job
    { title : String
    , employer : String
    , when : String
    , description : List Content
    }
  | Project
    { title : String
    , technology : String
    , description : List Content
    , github : String
    }
  | Skill
    { name : String
    , level : String
    }

-- CONSTANTS -------------------------------------------------------------------
about : Section
about =
  { id = "about"
  , colour = Teal
  , heading = "About"
  , content =
    [ Paragraph <| "I'm a PhD student on the Media and Arts Technology programme "
      ++ "at Queen Mary University of London. My research is in the field of music "
      ++ "computing, particularly looking at how programming languages are designed "
      ++ "for musicians and audio programmers." 
    , Paragraph <| "Outside of my research, I have a keen interest in front-end "
      ++ "web development and functional programming – and mixing the two (why "
      ++ "aren't you using Elm yet?)"
    , Paragraph <| "I'm currently looking for front-end work in London. If you'd "
      ++ "like to learn a little more about me then keep scrolling or you can "
      ++ "reach out to me via email, linkedin, or social media."
    ]
  }

education : Section
education =
  { id = "education"
  , colour = Blue
  , heading = "Education"
  , content =
    [ University
      { degree = "PhD Media and Arts Technology"
      , university = "Queen Mary University of London"
      , when = "2017 – 2021"
      }
    , University
      { degree = "MA Computational Art"
      , university = "Goldsmiths University of London"
      , when = "2016 – 2017"
      }
    , University
      { degree ="Ba(Hons) Creative Music Technology"
      , university = "Bath Spa University"
      , when = "2013 – 2016"
      }
    ]
  }

experience : Section
experience =
  { id = "experience"
  , colour = Indigo
  , heading = "Experience"
  , content =
    [ Job
      { title = "Demonstrator – Introduction to Coding Bootcamp"
      , employer = "Institute of Coding"
      , when = "July 2019, September 2019"
      , description =
        [
        ]
      }
    , Job
      { title = "Lead Demonstrator – The Semantic Web"
      , employer = "Queen Mary University of London"
      , when = "Jan 2019 – May 2019"
      , description = 
        [
        ]
      }
    ]
  }

projects :  Section
projects =
  { id = "projects"
  , colour = Purple
  , heading = "Projects"
  , content =
    [ Project
      { title = "Flow"
      , technology = "javascript / web audio / framework"
      , description = 
        [ Paragraph <| "Flow is a complete framework for building complex Web "
          ++ "Audio applications with javascript. It's built on an elm-like "
          ++ "Model-View-Update architecture and couples strict separation of "
          ++ "concerns with a concise declarative API for Web Audio programming."
        ]
      , github = "https://github.com/flow-lang/flow-framework"
      }
    , Project
      { title = "elm-web-audio"
      , technology = "elm / web audio / library"
      , description = 
        [ Paragraph <| "Programming with the vanilla Web Audio API is a largely "
          ++ "imperative, and object-oriented, affair. Elm-web-audio is an "
          ++ "alternative, declarative, API for Web Audio programming in Elm."
        ]
      , github = "https://github.com/pd-andy/elm-web-audio"
      }
    , Project
      { title = "do-app"
      , technology = "elm / localstorage / tailwindcss / application"
      , description = 
        [ Paragraph <| "Do is your typical, run-of-the-mill, front-end developer "
          ++ "todo list app. Built as a first proper project using Elm as well as "
          ++ "an opportunity to test out a utility-first css approach with "
          ++ "tailwind, do supports creating / completing / discarding todos that "
          ++ "get saved locally using the localStorage API."
        ]
      , github = "https://github.com/pd-andy/do-app"
      }
    ]
  }

skills : Section
skills =
  { id = "skills"
  , colour = Pink
  , heading = "Skills"
  , content =
    [ Paragraph <| "Here you'll find a memory dump of the various technologies "
      ++ "I've learned and used up until now. These things are usually rated on "
      ++ "a fairly arbitrary scale, so here's my best attempt at keeping it real:"
    , Subheading "Languages"
    , Skill { name = "JavaScript", level = "Comfortable" }
    , Skill { name = "Elm", level = "Comfortable" }
    , Skill { name = "TypeScript", level = "Familiar" }
    , Skill { name = "CSS", level = "Familiar" }
    , Skill { name = "Haskell", level = "Familiar" }
    , Skill { name = "ReasonML", level = "Aware" }
    , Subheading "Frameworks"
    , Skill { name = "Vue", level = "Familiar" }
    , Skill { name = "React", level = "Aware" }
    , Subheading "Misc"
    , Skill { name = "Web Audio API", level = "Comfortable" }
    , Skill { name = "Git", level = "Familiar" }
    ]
  }

-- FUNCTIONS -------------------------------------------------------------------
view : Section -> Html msg
view section =
  Html.section 
    [ id section.id
    , class <| Colour.toBackground section.colour
    , class "p-8 lg:p-12"
    ]
    [ h1 [ class "lg:text-6xl text-4xl font-semibold border-b-4 border-gray-900 mb-4" ] 
      [ text section.heading ]
    , div [ class "container" ]
      <| List.map viewSectionContent section.content
    ]

viewSectionContent : Content -> Html msg
viewSectionContent content =
  case content of
    Paragraph string ->
      p [ class "mt-4 text-lg text-justify" ] [ text string ]

    Subheading string ->
      h2 [ class "mt-4 text-2xl font-bold border-b-2 border-gray-900 mb-4" ]
        [ text string ]

    Code lines ->
      pre [ class "font-mono bg-gray-800 mt-4 p-2 border-l-8 border-gray-900 overflow-y-scroll text-white rounded-r-lg shadow" ]
        <| List.map (\line -> code [ class "pl-2" ] [ text <| line ++ "\n" ]) lines

    University { degree, university, when } ->
      div [ class "pt-6" ]
        [ h2 [ class "text-2xl" ] [ text degree ]
        , h3 [ class "text-lg" ] [ text university ]
        , span [ class "italic" ] [ text when ]
        ]
  
    Job { title, employer, when } ->
      div [ class "pt-6" ]
        [ h2 [ class "text-2xl" ] [ text title ]
        , h3 [ class "text-lg" ] [ text employer ]
        , span [ class "italic" ] [ text when ]
        ]

    Project { title, technology, description, github } ->
      div [ class "pt-6" ]
        [ h2 [ class "text-2xl font-bold" ] [ text title ]
        , h3 [ class "text-md italic border-b-2 border-gray-900 inline-block pb-1" ] [ text technology ]
        , div [ class "mb-2", attribute "data-description" "" ]
          <| List.map viewSectionContent description
        , a [ class "text-md", href github ] 
          [ i [ class "fab fa-github-square mr-2" ] []
          , span [ class "italic underline" ] [ text "Find it on GitHub." ]
          ]
        ]

    Skill { name, level } ->
      div [ class "mt-4 text-lg flex justify-between" ]
        [ span [ class "" ] [ text name ]
        , span [ class "" ] [ text level ]
        ]