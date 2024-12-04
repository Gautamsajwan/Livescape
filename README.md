# LiveHUB

Developed a full-stack video live streaming platform that supports real-time video streaming with RTMP and WHIP protocols. The platform includes interactive features such as live chat, likes, follows, and comments to enhance engagement during streams. Additionally, it provides creators with tools like slow mode in chat and audience moderation controls, enabling better stream management and an improved user experience.

## Key Features

- User can stream by connecting their OBS to our app
- Live viewers count
- Real-time chat is implemented using LiveKit
- Follower and Following also available
- Blocking and Unblocking system also available
- Slow chat mode
- Followers only chat
- Enable or Disable chat
- Search functionality also available
- Updating user using Clerk WEBHOOKS


## Installation

Clone the project on your machine

```bash
git clone https://github.com/Gautamsajwan/Livescape.git
```
Open Project
```bash
cd livescape
```
Install dependencies
```bash
npm install
```

Set up .env file
```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
CLERK_SECRET_KEY
NEXT_PUBLIC_CLERK_SIGN_IN_URL
NEXT_PUBLIC_CLERK_SIGN_UP_URL
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL
CLERK_WEBHOOK_SECRET

// go to neon-db and get the database url
DATABASE_URL="Your database url"

// Go to livekit and get these credentials
LIVEKIT_API_URL
LIVEKIT_API_KEY
LIVEKIT_API_SECRET
NEXT_PUBLIC_LIVEKIT_WS_URL

// Go to upload-thing and get these credentials
UPLOADTHING_SECRET
UPLOADTHING_APP_ID
UPLOADTHING_TOKEN
```

## Setup Database
You can go to [neon.tech](https://neon.tech) to get a free postgres instance.Now run
```bash
npx prisma generate
npx prisma db push

```
Start app
```bash
npm run dev
```

## Future Improvements

- Migrate auth from clerk to NextAuth

## Feedback 

Feel free to provide Feedback at 
gautamsajwan8126@gmail.com
