import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkMode = true;
  private isLightMode = false;

  //ISSUE: Only some parts are toggled to light and dark mode
  toggleTheme(): void {
    
    this.isDarkMode = !this.isDarkMode;
    this.updateTheme();
    /*
    this.isDarkMode = !this.isDarkMode;
    this.updateTheme();
    */
  }

  private updateTheme(): void {
    if (this.isDarkMode == true) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
    }
  }
}
