/* eslint-disable no-console */
export const printProfile = (profileData) => {
    console.log('implementation of printProfile');
    const { name, company } = profileData;
    console.log(`${name} from ${company}`);
};
