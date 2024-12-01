import React, { useState, useEffect } from "react";
import { createAvatar } from "@dicebear/core";
import { avataaars } from "@dicebear/collection";

interface AvatarProps {
  userId: string;
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ userId, className = "" }) => {
  const [avatarSvg, setAvatarSvg] = useState<string>("");

  useEffect(() => {
    const avatar = createAvatar(avataaars, {
      seed: userId || "default-avatar",
      // size: 52,
    });
    setAvatarSvg(avatar.toString());
  }, [userId]);

  return (
    <div
      className={`${className} w-10 h-10 md:w-16 md:h-16`}
      dangerouslySetInnerHTML={{ __html: avatarSvg }}
    />
  );
};

export default Avatar;
