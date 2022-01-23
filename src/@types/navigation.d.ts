export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      SignIn: undefined;
      Home: undefined;
      Question: ProductNavigationProps;
      ResultQuestion: OrderNavigationProps;
      Congratulations: undefined;
      params?: {
        question: Result;
      };
      ReportsQuestion: undefined;
      params?: {
        item: ReportQuestionUser;
      };
    }
  }
}
