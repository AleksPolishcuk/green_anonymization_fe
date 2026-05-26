import { apiClient } from "services/api/client";
import type User from "shared/interfaces/User";

import type {
  AvatarResponse,
  UpdateProfileRequest,
  UpdateTimezoneRequest,
  UpdateTimezoneResponse,
} from "./typing";

const USER_API = {
  profile: "/user/profile",
  avatar: "/user/avatar",
  timezone: "/user/timezone",
} as const;

export const userService = {
  async getProfile(): Promise<User> {
    return apiClient.get<User>(USER_API.profile);
  },

  async updateProfile(payload: UpdateProfileRequest): Promise<User> {
    return apiClient.patch<User, UpdateProfileRequest>(
      USER_API.profile,
      payload,
    );
  },

  async uploadAvatar(file: File): Promise<AvatarResponse> {
    const form = new FormData();
    form.append("file", file);
    return apiClient.patch<AvatarResponse, FormData>(USER_API.avatar, form);
  },

  async updateTimezone(timezone: string): Promise<UpdateTimezoneResponse> {
    return apiClient.patch<UpdateTimezoneResponse, UpdateTimezoneRequest>(
      USER_API.timezone,
      { timezone },
    );
  },
};
