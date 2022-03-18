import { faker } from '@faker-js/faker';

function random() {
  return {
    data: {
      id: faker.datatype.number(),
      num: faker.datatype.number(),
      title: faker.company.companyName(),
      year: faker.datatype.datetime().getFullYear().toString(),
      alt: faker.lorem.text(),
      img: faker.image.imageUrl(),
    },
  };
}

export default {
  random,
};
