import { FormStructure } from "../form.model";
import { UserBaseSection } from "../sections/user-base.section";
import { UserInfoSection } from "../sections/user-info.section";

export const UserNewFormStructure: FormStructure = {
  sections: [
    UserBaseSection,
    UserInfoSection
  ]
}