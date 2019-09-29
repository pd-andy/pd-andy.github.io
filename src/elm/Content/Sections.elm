module Content.Sections exposing (..)

-- IMPORTS ---------------------------------------------------------------------
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)

-- TYPES -----------------------------------------------------------------------
type alias Section =
  { id : String
  , colour : String
  , heading : String
  , content : List Content
  }

type Content
  = Paragraph String
  | Subheading String
  | Code (List String)
  | Image String
  | University
    { degree : String
    , university : String
    , when : String
    }
  | Job
    { title : String
    , employer : String
    , when : String
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
  , colour = "teal"
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
      ++ "contact me using the links to the left."
    ]
  }

education : Section
education =
  { id = "education"
  , colour = "blue"
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
  , colour = "indigo"
  , heading = "Experience"
  , content =
    [ Job
      { title = "Demonstrator – Introduction to Coding Bootcamp"
      , employer = "Institute of Coding"
      , when = "July 2019, September 2019"
      }
    , Job
      { title = "Lead Demonstrator – The Semantic Web"
      , employer = "Queen Mary University of London"
      , when = "Jan 2019 – May 2019"
      }
    ]
  }

projects : String -> Section
projects doImgUrl =
  { id = "projects"
  , colour = "purple"
  , heading = "Projects"
  , content =
    [ Project
      { title = "Flow"
      , technology = "javascript / web audio / framework"
      , description = 
        [ Paragraph <| "Flow is a complete framework for creating interactive "
          ++ "audio applications using the Web Audio API. It's main selling "
          ++ "points are the highly declarative API for creating audio processing "
          ++ "graphs and the implementation of the Model-View-Update (MVU) "
          ++ "architecture for audio applications. MVU is an Elm-inspired "
          ++ "architecture that places heavy focus on deterministic updates to "
          ++ "application state and a strict separation of each layer of that "
          ++ "application. View elements do not manipulate audio elements directly "
          ++ "for example, instead specific Actions are dispatched to the runtime "
          ++ "triggering a new application Model to be generated and thus a new "
          ++ "view and audio graph." 
        ]
      , github = "https://github.com/flow-lang/flow-framework"
      }
    , Project
      { title = "elm-web-audio"
      , technology = "elm / web audio / library"
      , description = 
        [ Paragraph <| "Programming with the vanilla Web Audio API is a largely "
          ++ "imperative, and object-oriented, affair. Audio nodes are created "
          ++ "and stored in variables, and properties and methods are accessed "
          ++ "and invoked on the nodes themselves. Elm-web-audio is new declarative "
          ++ "API for Web Audio programming specifically in Elm."
        , Paragraph <| "The below snippet shows how to create a simple audio "
          ++ "graph with the vanilla API. We create an oscillator and a gain "
          ++ "node, set some parameters, and then connect them all together. "
        , Code
          [ "const osc = context.createOscillator()"
          , "const amp = context.createGain()"
          , ""
          , "osc.frequency.value = 440"
          , "amp.gain.value = 0.5"
          , ""
          , "osc.connect(amp)"
          , "amp.connect(context.destination)"
          , ""
          , "osc.start()"
          ]
        , Paragraph <| "There's a lot of bookkeeping involved here, we have to "
          ++ "store each node in a variable and then access that node to set some "
          ++ "parameters. This quickly gets out of hand with larger audio graphs. "
          ++ "Below is the elm-web-audio alternative. The library provides an API "
          ++ "similar to Elm's own html library that leads to a highly declarative "
          ++ "and very visual way of describing Web Audio graphs."
        , Code
          [ "N.oscillator [ P.frequency 440 ]"
          , "  [ N.gain [ P.gain 0.5 ]"
          , "    [ N.dac ]"
          , "  ]"
          ]
        , Paragraph <| "This let's us focus on what the audio graph should be "
          ++ "instead of how to create it. As Elm cannot call javascript code "
          ++ "directly (pesky purity), a companion example implementation for a "
          ++ "virtual audio graph is provded in the repository. The graph just "
          ++ "needs to be sent via a port to javascript land to be constructed."
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
        , Image doImgUrl
        ]
      , github = "https://github.com/pd-andy/do-app"
      }
    ]
  }

skills : Section
skills =
  { id = "skills"
  , colour = "pink"
  , heading = "Skills"
  , content =
    [ Paragraph <| "Here you'll find a memory dump of the various technologies "
      ++ "I've learned and used up until now. These things are usually rated on "
      ++ "a fairly arbitrary scale, so here's my best attempt at keeping it real:"
    , Paragraph <| "• Comfortable = I've used this tech for quite a while now. I'm "
      ++ "aware of best practices and some the quirks and I'd be comfortable being "
      ++ "thrown into the deep end using this."
    , Paragraph <| "• Familiar = I've used this tech a little bit. With some "
      ++ "guidance I could create some cool things, but I'll probably make some "
      ++ "mistakes on the way."
    , Paragraph <| "• Aware = This tech is on my radar, and I might've used it "
      ++ "a little bit in the past. Maybe it is similar to something else I'm "
      ++ "comfortable with or maybe it's a totally different mindset shift. I "
      ++ "haven't invested much time into learning this, but I'd be willing to "
      ++ "in the future."
    , Subheading "Languages"
    , Skill { name = "JavaScript", level = "Comfortable" }
    , Skill { name = "Elm", level = "Comfortable" }
    , Skill { name = "Haskell", level = "Familiar" }
    , Skill { name = "Processing (Java)", level = "Familiar" }
    , Skill { name = "OpenFrameworks (C++)", level = "Familiar" }
    , Skill { name = "ReasonML", level = "Aware" }
    , Subheading "Frameworks"
    , Skill { name = "Vue", level = "Comfortable" }
    , Subheading "Misc"
    , Skill { name = "Web Audio API", level = "Familiar" }
    ]
  }

-- FUNCTIONS -------------------------------------------------------------------
view : Section -> Html msg
view section =
  Html.section [ id section.id, class <| "bg-" ++ section.colour ++ "-200 p-8 lg:p-12" ]
    [ h1 [ class "lg:text-6xl text-3xl font-semibold border-b-4 border-gray-900 mb-4" ] 
      [ text section.heading ]
    , div [ class "container" ]
      <| List.map viewSectionContent section.content
    ]

viewSectionContent : Content -> Html msg
viewSectionContent content =
  case content of
    Paragraph string ->
      p [ class "mt-4 text-lg text-justify" ][ text string ]

    Subheading string ->
      h2 [ class "mt-4 text-2xl font-bold border-b-2 border-gray-900 mb-4" ]
        [ text string ]

    Code lines ->
      pre [ class "font-mono bg-gray-800 mt-4 p-2 border-l-8 border-gray-900 overflow-y-scroll text-white rounded-r-lg shadow" ]
        <| List.map (\line -> code [ class "pl-2" ] [ text <| line ++ "\n" ]) lines

    Image url ->
      div [ class "mt-4 shadow" ]
        [ img [ src url, class "w-full rounded-lg" ] []
        ]

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
        , div [ class "mb-2" ]
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