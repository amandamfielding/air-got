Component Hierarchy

AuthFormContainer
  AuthForm

HomeContainer
  Home
  Header

PlacesItemContainer
  Place
  ReviewsIndex

SearchResultsContainer
  Search
  PlacesIndex

BookingsContainer
  BookingsIndex

BookingsItemContainer
  Booking

NewEditBookingContainer
  NewEditBookingForm

NewReviewContainer
  NewReviewForm

NewEditPlaceContainer
  NewEditPlaceForm

EditUserContainer
  EditUserForm

Routes  
"/sign-up" - "AuthFormContainer"
"/sign-in" - "AuthFormContainer"
"/home" - "HomeContainer"
"/home/search" - "SearchResultsContainer"
"home/places/:placeId" - "PlacesItemContainer"
"home/myBookings" - "BookingsContainer"
"home/myBookings/:bookingId" - "BookingsItemContainer"
"new-place" - "NewEditPlaceContainer"
"edit-place" - "NewEditPlaceContainer"
"new-booking" - "NewEditBookingContainer"
"edit-booking" - "NewEditBookingContainer"
"new-review" - "NewEditReviewContainer"
"edit-profile" - "EditUserContainer"
