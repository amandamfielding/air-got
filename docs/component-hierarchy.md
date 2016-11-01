## Component Hierarchy

**AuthFormContainer**
  - AuthForm

**HomeContainer**
  - Header
    Home
    RegionsContainer
    Footer

**RegionsContainer**
  - RegionsIndex

**PlacesItemContainer**
  - Place
  - NewBookingForm
  - ReviewsIndex
  - NewReviewForm

**SearchResultsContainer**
  - Search
  - PlacesIndex

**BookingsContainer**
  - BookingsIndex

**UsersContainer**
  - User
  - EditUserForm

## Routes  
- "/sign-up" - "AuthFormContainer"
- "/sign-in" - "AuthFormContainer"
- "/home" - "HomeContainer"
- "/search" - "SearchResultsContainer"
- "/places/:placeId" - "PlacesItemContainer"
- "/bookings" - "BookingsContainer"
- "/profile" - "UsersContainer"
- "/profile-edit" - "EditUserForm"
