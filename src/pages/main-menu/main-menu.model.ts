export class MainMenuModel {
  apps: Array<MainMenuItemModel>;
  banner_title: string;
  banner_image: string;
}

export class MainMenuItemModel {
  title: string;
  icon: string;
  page: string;
}
