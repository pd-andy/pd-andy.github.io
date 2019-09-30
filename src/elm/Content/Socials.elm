module Content.Socials exposing (..)

-- IMPORTS ---------------------------------------------------------------------
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)

-- TYPES -----------------------------------------------------------------------
type alias SocialMedia =
  { name : String
  , icon : String
  , link : String
  }

-- CONSTANTS -------------------------------------------------------------------
all : List SocialMedia
all =
  [ SocialMedia "Email" "fas fa-envelope" "mailto:andrew.thompson@qmul.ac.uk"
  , SocialMedia "Twitter" "fab fa-twitter-square" "https://twitter.com/_pdandy"
  , SocialMedia "Telegram" "fab fa-telegram" "https://t.me/pd_andy"
  , SocialMedia "LinkedIn" "fab fa-linkedin-in" "https://www.linkedin.com/in/andrew-thompson-3a6939124/"
  , SocialMedia "GitHub" "fab fa-github-square" "https://github.com/pd-andy"
  ]

-- FUNCTIONS -------------------------------------------------------------------
list : List SocialMedia -> Html msg
list socials =
  div [ id "socials", class "flex justify-around" ]
    <| List.map button socials

button : SocialMedia -> Html msg
button social =
  a [ class "flex flex-col items-center my-6", href social.link ]
    [ i [ class social.icon, class "fa-2x" ] []
    , span [ class "text-sm my-2" ] [ text social.name ]
    ]