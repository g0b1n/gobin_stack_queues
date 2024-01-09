
class BrowserHistory {
    constructor() {
        this.forwardStack = [];
        this.backStack = [];
        this.currentURL = null;
    }

    // Navigate to new URL
    visit(url) {
        this.backStack.push(this.currentURL);
        this.currentURL = url;
        this.forwardStack = [];
    }

    // Go back to prev page
    back() {
        if (this.backStack.length > 0) {
            this.forwardStack.push(this.currentURL);
            this.currentURL = this.backStack.pop();
        }
    }

    // Go forward to next page
    forward() {
        if (this.forwardStack.length > 0) {
          this.backStack.push(this.currentURL);
          this.currentURL = this.forwardStack.pop();
        }
    }
    
    // Get the current URL.
    getCurrentURL() {
        return this.currentURL;
    }
}