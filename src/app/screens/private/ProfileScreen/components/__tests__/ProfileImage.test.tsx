import React from 'react';

import {fireEvent, render, screen} from '@test';

import {ProfileImage} from '../ProfileImage';

const mockPickImage = jest.fn();

const PROFILE_IMAGE_URI = 'https://johndoe.com/image.jpg';

function customRender(customImageUri?: string) {
  render(
    <ProfileImage pickImage={mockPickImage} profileImageUri={customImageUri} />,
  );

  return {
    editProfileButton: screen.getByTestId('edit-profile-image'),
    profileImageElement: screen.queryByTestId('profile-image'),
  };
}
describe('ProfileImage', () => {
  it('should be render component correctly', () => {
    const {editProfileButton, profileImageElement} =
      customRender(PROFILE_IMAGE_URI);

    expect(editProfileButton).toBeTruthy();
    expect(profileImageElement).toBeTruthy();
  });

  it('call pick image function correctly', () => {
    const {editProfileButton} = customRender(PROFILE_IMAGE_URI);
    fireEvent.press(editProfileButton);

    expect(mockPickImage).toHaveBeenCalled();
  });

  it('should be render icon avatar element if profile uri is empty', () => {
    customRender(undefined);

    const iconAvatarElement = screen.getByTestId('icon-avatar');
    expect(iconAvatarElement).toBeTruthy();
  });
});
