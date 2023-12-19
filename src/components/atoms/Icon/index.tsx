import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { Props as FAProps } from '@fortawesome/react-native-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faKey } from '@fortawesome/free-solid-svg-icons/faKey'
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons/faCircleExclamation'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons/faCircleCheck'

library.add(
  faUser,
  faLock,
  faKey,
  faEnvelope,
  faCircleExclamation,
  faCircleCheck,
)

type Props = FAProps

export const Icon: React.FC<Props> = ({ icon, ...faIconProps }) => {
  return <FontAwesomeIcon icon={icon} {...faIconProps} />
}
