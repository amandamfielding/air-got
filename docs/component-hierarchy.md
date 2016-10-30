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
- "/home/search" - "SearchResultsContainer"
- "home/places/:placeId" - "PlacesItemContainer"
- "home/bookings" - "BookingsContainer"
- "home/profile" - "UsersContainer"
- "home/profile-edit" - "EditUserForm"
