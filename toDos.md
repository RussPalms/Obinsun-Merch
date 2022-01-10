# Obinsun Documentation Contents

1. User Roles
    - customer
    - designer
    - marketing
    - admins
2. Email & Phone Validation (SendGrid/Twillio)
    - staff
      -> designer
      -> marketing
      -> admin
3. Authorization Methods
    - Google
    - Facebook
    - Microsoft
    - Apple
    - Paypal
    - Discord
    - Reddit
4. Refactor
    - Error Handling
      -> Interface
      • Components
      ~ Authorization
      ~ Profile
      a. ProfileForm
      b. UserProfile
      • Pages
      ~ /authenticate
      ~ /profile
      -> Logic
      • api (requests/response)
      ~ authorization
      ~ login
      ~ register
      ~ password change
      • hooks (state manegement)
      ~ useFirebaseAuth
      • library (helper functions)
      ~ authentication
      ~ database
      ~ password hashing
    - Compacting
      -> Create more general functions
      -> Chain Firestore methods
    - Validation
      -> Client Forms
      • Tailwind
      • Yup
      -> Server
      • async/await
      • promises
5. Implementation
    - Layout (outer component/environment)
      -> background
      • color gradients
      ~ themes
      ~ opacity
      • containers sizes/(max & min) (mobile first, extra large last)
      ~ grid
      ~ flexbox
      -> area
      • padding
      • borders
      ~ radius
      ~ shadow
    - Position (inner component/entity)
      -> dimention
      • margin
      -> children are percentages of parents
      • height
      • width
6. Functionality
    - Firebase storage uploads/retrievals
      -> design svgs
      -> generated mockups
    - Stripe payment gateway
      -> guest checkouts
      -> transactions between accounts
      -> coupon codes
    - Printiful API
      -> custom mockup generator
      -> dropshipping integration with Firebase & Stripe
7. Features
    - Next.js server-side rendering
    - Redux/Context Providers
      -> themes
      -> animations
      -> assets to icon components
    - Clients
      -> Storybook
      -> Apollo/GraphQL
    - Tests
      -> Jest
8. Product
    - Business
      -> optimized workflow
      • design is created
      • user-friendly file uploads
      • mockup imports
      • anylitics
      ~ customer reviews
      ~ popular products
      -> automated payments
      • maintenance
      • integrations
      ~ Illustrator SDK
      ~ custom mockup generator & adjustor
      ~ employee management system
      ~ client portal
    - Consumer
      -> customized merchandise
      • size chart
      • color picker
      • type descriptions
      -> personal recomendations
      -> seemless checkout
      -> feedback
      • product comments
      • favorite list
9. Web 3.0
    - Moralis
      -> Authentication
      -> Database
    - Assets to NFTs
      -> Hashlips (trait compiler)
      -> OpenSea (secondary market)
    - Solidity
      -> Smart Contracts
      -> Blockchain Bridges
10. Advertisement
    - Social Media
    - Discord Server
    - Reddit Thread
    - Email List
11. Calculations
    - Firebase (database read/write)
    - Printiful (dropshipping requests)
    - Stripe (transaction fees)
    - Ethereum Mainnet (NFT minting)
