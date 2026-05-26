export type UpdateProfileRequest = {
  firstName?: string;
  lastName?: string;
  companyName?: string;
};

export type AvatarResponse = {
  avatarUrl: string;
};

export type UpdateTimezoneRequest = {
  timezone: string;
};

export type UpdateTimezoneResponse = {
  timezone: string;
};
