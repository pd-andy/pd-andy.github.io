module Section exposing (..)

-- IMPORTS ---------------------------------------------------------------------
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)

-- TYPES -----------------------------------------------------------------------
type alias Section =
  { bgColour : String
  , heading : String
  , paragraphs : List String
  , id : String
  }

-- CONSTANTS -------------------------------------------------------------------
about : Section
about =
  { bgColour = "teal"
  , heading = "About"
  , paragraphs = 
    [
    ]
  , id = "about"
  }

education : Section
education =
  { bgColour = "blue"
  , heading = "Education"
  , paragraphs = 
    [
    ]
  , id = "education"
  }

experience : Section
experience =
  { bgColour = "indigo"
  , heading = "Experience"
  , paragraphs = 
    [
    ]
  , id = "experience"
  }

projects : Section
projects =
  { bgColour = "purple"
  , heading = "Projects"
  , paragraphs = 
    [
    ]
  , id = "projects"
  }

skills : Section
skills =
  { bgColour = "pink"
  , heading = "Skills"
  , paragraphs = 
    [
    ]
  , id = "skills"
  }


-- FUNCTIONS -------------------------------------------------------------------
view : Section -> Html msg
view section =
  Html.section
    [ id section.id
    , class <| "bg-" ++ section.bgColour ++ "-200"
    , class "p-8"
    ]
    [ h1 
      [ class "lg:text-6xl text-3xl font-semibold"
      , class "border-b-4 border-gray-900"
      ] 
      [ text section.heading ]
    , div []
      <| List.map (\paragraph -> p [] [ text paragraph ]) section.paragraphs
    ]