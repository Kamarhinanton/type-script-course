enum Membership {
  Simple, Standard, Premium
}

const membership = Membership.Standard
const membershipReverse = Membership[2]
console.log(membershipReverse)

enum SocialMedia {
  facebook = 'fb',
  instagram = 'insta'
}

const social  = SocialMedia.instagram;
console.log(social) /*==> insta */