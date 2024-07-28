import {CategoryIdentify} from '@repositories';

export function buildBookCategory(params: {
  categoryIdentify: CategoryIdentify;
  categoryTitle: string;
}) {
  return {
    identify:
      params && params?.categoryIdentify
        ? params.categoryIdentify
        : 'recommended-for-you',
    title:
      params && params?.categoryTitle
        ? params.categoryTitle
        : 'Recommended For You',
  };
}
