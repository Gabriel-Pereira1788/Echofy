import React from 'react';

import {Book, Review} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {
  Button,
  Carousel,
  ReviewCard,
  Text,
  TouchableOpacityBox,
} from '@components';

type Props = {
  reviews: Review[];
  bookData: Book;
};

export function BookDetailsReviews({reviews, bookData}: Props) {
  const navigation = useNavigation();
  function redirectToBookReviewPanel() {
    if (bookData) {
      navigation.navigate('BookReviewPanel', {
        bookId: bookData.id,
        bookImage: bookData.bookImage,
        bookTitle: bookData.bookTitle,
      });
    }
  }

  function redirectToNewReviewScreen() {
    if (bookData) {
      navigation.navigate('NewReviewScreen', {
        bookId: bookData.id,
      });
    }
  }
  return (
    <Carousel
      text="Review"
      content={reviews}
      RightComponent={
        <TouchableOpacityBox onPress={redirectToBookReviewPanel}>
          <Text text="View More" preset="medium/14" color="accent50" />
        </TouchableOpacityBox>
      }
      EmptyComponent={
        <Button
          text="Add Review"
          iconName="plus"
          onPress={redirectToNewReviewScreen}
        />
      }
      renderItem={({item}) => <ReviewCard review={item} />}
    />
  );
}
