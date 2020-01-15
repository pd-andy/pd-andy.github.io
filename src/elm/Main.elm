module Main exposing 
  ( main 
  )

{- Imports ------------------------------------------------------------------ -}
import Browser
import Browser.Navigation
import Tuple.Extra
import Url exposing (Url)

import Layout.Default

import Page.About


{- Model -------------------------------------------------------------------- -}
{-| -}
type alias App =
  { page : (Layout, Page)
  , key : Browser.Navigation.Key
  , model : Model
  }

{-| -}
type alias Model =
  {
  }

{-| -}
type Layout
  = Default

{-| -}
type Page
  = About


{-| -}
init : () -> Url -> Browser.Navigation.Key -> (App, Cmd Msg)
init _ url key =
  Tuple.Extra.pairWith Cmd.none <|
    { page = route url
    , key = key
    , model = 
      {
      }
    }

{- Update ------------------------------------------------------------------- -}
{-| -}
type Msg
  = InternalUrlRequest Url
  | ExternalUrlRequest String
  | NavigateTo (Layout, Page)

{-| -}
update : Msg -> App -> (App, Cmd Msg)
update msg {page, key, model} =
  case msg of
    InternalUrlRequest url ->
      Tuple.Extra.pairWith (Browser.Navigation.pushUrl key (Url.toString url)) <|
        { page = page
        , key = key
        , model = model
        }

    ExternalUrlRequest url ->
      Tuple.Extra.pairWith (Browser.Navigation.load url) <|
        { page = page
        , key = key
        , model = model
        }

    NavigateTo newPage ->
      Tuple.Extra.pairWith Cmd.none <|
        { page = newPage
        , key = key
        , model = model
        }

{-| -}
route : Url -> (Layout, Page)
route { path } =
  case path of
    "/" -> (Default, About)
    _   -> (Default, About)

{- View --------------------------------------------------------------------- -}
{-| -}
view : App -> Browser.Document Msg
view { page, model } =
  let
    layout  = Tuple.first page
    content = Tuple.second page
  in
  viewPage content model
    |> viewLayout layout

{-| -}
viewLayout : Layout -> (Browser.Document Msg -> Browser.Document Msg)
viewLayout layout =
  case layout of
    Default ->
      Layout.Default.view

{-| -}
viewPage : Page -> Model -> Browser.Document Msg
viewPage page model =
  case page of
    About ->
      Page.About.view {} {}

{- Subscriptions ------------------------------------------------------------ -}
{-| -}
subscriptions : App -> Sub Msg
subscriptions _ =
  Sub.none

{- Main --------------------------------------------------------------------- -}
{-| -}
main : Program () App Msg
main =
  Browser.application
      { init = init
      , view = view
      , update = update
      , subscriptions = subscriptions
      , onUrlChange = onUrlChange
      , onUrlRequest = onUrlRequest
      }

{-| This is called whenever we call Browser.Navigation.pushUrl and is used to
determine what route to render.
-}
onUrlChange : Url -> Msg
onUrlChange url =
  NavigateTo (route url)

{-| This function is called whenever an <a>nchor element is clicked. The type of
url request (internal or external) is based on the url itself. Internal requests
include things like #about or /projects and should be used by the router to
navigate to the appropriate SPA page.
-}
onUrlRequest : Browser.UrlRequest -> Msg
onUrlRequest urlRequest =
  case urlRequest of
    Browser.Internal url ->
      InternalUrlRequest url

    Browser.External url ->
      ExternalUrlRequest url
