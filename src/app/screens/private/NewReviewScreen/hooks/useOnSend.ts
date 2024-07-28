import {useSendReview} from '@domain';
import {useAuthContext} from '@providers';
import {useNavigation} from '@react-navigation/native';
import {useToastActions} from '@services';

export function useOnSend(bookId: string) {
  const navigation = useNavigation();

  const toast = useToastActions();

  const {send} = useSendReview(bookId, {
    onSuccess: () => {
      toast.show({
        title: 'Success.',
        message: 'review created!',
        type: 'success',
      });
      navigation.goBack();
    },
  });

  const {credentials} = useAuthContext();

  function onSend(content: string, rating: number) {
    if (content && rating > 0 && credentials) {
      send({
        content,
        vote_rating: rating,
        author: {
          name: credentials.name,
          profile_image: credentials.profileImage,
        },
      });
    }
  }

  return onSend;
}
