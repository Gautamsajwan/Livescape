import { StreamPlayer } from '@/components/stream-player'
import { getUserByUsername } from '@/lib/user-service'
import { currentUser } from '@clerk/nextjs/server'
import React from 'react'

type Props = {
  params: {
    username: string
  }
}
 
async function CreatorPage({ params }: Props) {
  const externalUser = await currentUser()
  const user = await getUserByUsername(params.username)

  if (!user || user.externalUserId !== externalUser?.id || !user.stream) {
    throw new Error('Unauthorized')
  }

  return (
    <div className="h-full">
      <StreamPlayer user={user} stream={user.stream} isFollowing={true} />
    </div>
  )
}

export default CreatorPage