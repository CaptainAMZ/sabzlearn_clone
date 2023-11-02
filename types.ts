export type BreadcrumbLinkType = { id: number; title: string; to: string };

export type InputState = {
  value: string;
  isValid: boolean;
};

// useForm Hook Start

export type InputReducerAction = {
  type: "INPUT_CHANGE";
  value: string;
  inputId: string | number;
  isValid: boolean;
};

export type Inputs = {
  // password?: InputState;
  // username?: InputState;
  // email?: InputState;
  // name?: InputState;
  // phone?: InputState;
  // body?: InputState;
  [key: string]: InputState;
};

export type InputReducerState = {
  inputs: Inputs;
  isFormValid: boolean;
};

export type OnInputHandlerType = {
  (id: string | number, value: string, isValid: boolean): void;
};

export type FormReducerType = {
  (state: InputReducerState, action: InputReducerAction): InputReducerState;
};

export interface UseFormType {
  (initInputs: Inputs, initFormValid: boolean): [
    InputReducerState,
    OnInputHandlerType
  ];
}

// useFrom Hook End

export type InputProps = {
  id: string | number;
  element: "input" | "textarea";
  type: "text" | "password" | "email";
  placeholder?: string;
  className?: string;
  validation: Validation;
  onInputHandler: Function;
  isValid?: "true" | "false" | boolean;
};

export type Validation = Array<
  | RequiredValidatorRule
  | MinValidatorRule
  | MaxValidatorRule
  | EmailValidatorRule
>;

export type OnChangeEvent =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLTextAreaElement>;

export type RequiredValidatorRule = {
  value: "REQUIRED_VALUE";
};
export type MinValidatorRule = {
  value: "MIN_VALUE";
  min: number;
};
export type MaxValidatorRule = {
  value: "MAX_VALUE";
  max: number;
};
export type EmailValidatorRule = {
  value: "EMAIL_VALUE";
};

export type registerPageInputsType = Omit<
  InputProps,
  "validation" | "onInputHandler"
> & {
  iconClassName: string;
};

export type AuthContextType = {
  isLoggedIn: boolean;
  token: string;
  userInfos: UserInfosType | null;
  login: Function;
  logout: Function;
};

export type UserInfosType = {
  username: string;
  email: string;
  name: string;
  role: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  phone: string;
  __v: number;
} | null;

export type AllmenusType = {
  _id: string;
  title: string;
  href: string;
  parent: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  submenus?: AllmenusType[];
};

export interface CommentsInterface {
  _id: string;
  body: string;
  creator: CreatorInterface;
  createdAt: string;
  updatedAt: string;
  __v: number;
  answer: number;
  isAnswer: number;
  score: number;
  answerContent: {
    _id: string;
    body: string;
    course: string;
    creator: CreatorInterface;
    answer: number;
    isAnswer: number;
    mainCommendID: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    score: number;
  };
}

export interface SessionsInterface {
  _id: string;
  title: string;
  course: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  time: string;
  free: number;
}

export interface CategoryIDInterface {
  _id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  name: string;
}

export interface CreatorInterface {
  _id: string;
  username: string;
  email: string;
  name: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  profile: string;
  phone: string;
}

export interface CourseDetailsInterface {
  __v: number;
  _id: string;
  categoryID: CategoryIDInterface;
  comments: CommentsInterface[];
  courseStudentsCount: number;
  cover: string;
  createdAt: string;
  creator: CreatorInterface;
  description: string;
  discount: number;
  isComplete: number;
  isUserRegisteredToThisCourse: boolean;
  name: string;
  price: number;
  sessions: SessionsInterface[];
  shortName: string;
  status: string;
  support: string;
  updatedAt: string;
  isSlide?: boolean;
  registers: number;
  courseAverageScore: number;
}

export interface ArticlesInterface {
  _id: string;
  title: string;
  description: string;
  body: string;
  cover: string;
  shortName: string;
  categoryID: CategoryIDInterface & { description: string };
  creator: CreatorInterface;
  publish: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export type OrderStatusType = {
  title: string;
  status: string;
};

export type panelSidebarMenusType = {
  title: string;
  link: string;
};

export type IndexInfos = {
  phone: string;
  email: string;
  coursesCount: number;
  usersCount: number;
  totalTime: number;
};
