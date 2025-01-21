import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { User } from "@clerk/nextjs/server";

export default function UserInfo({ user }: { user: User | null }) {
  const role = user?.privateMetadata?.role?.toString();

  return (
    <div className="flex gap-2">
      <Avatar>
        <AvatarImage
          src={user?.imageUrl}
          alt={`${user?.firstName} ${user?.lastName}`}
        />
        <AvatarFallback>
          {user?.firstName} {user?.lastName}
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col g-1">
        <div className="fw-semibold">
          {user?.firstName} {user?.lastName}
        </div>
        <small>{user?.emailAddresses[0]?.emailAddress}</small>
        <Badge variant="destructive" className="w-fit mt-2">
          {role}
        </Badge>
      </div>
    </div>
  );
}
