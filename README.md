> Simple Test
> TEST: Can a user view a recipe? *PASS*
> TEST: Can a user create an account? *FAIL*
> TEST: Can a user upload a recipe on the site? *FAIL*
> Directory Tree
> congenial-octo-potato-lab-bravo/
> ├───assets/
> │   ├───scripts/
> |   │   └───app.js
> │   └───styles/
> |       └───styles.css
> ├───pages/
> │   ├───admin.html
> │   └───signin.html
> ├───index.html
> └───README.md
> Technology Stack
> HTML5
> CSS3
> Github
> GitHub Pages
> JavaScript
> Bootstrap 5.0
> Validation and Accessibility
> Checked what the site looked like on a mobile device
> Attribution
> Outside Resources: Borrowed code from w3schools.com's Bootstrap 5 resources, Toll House cookie recipe and image from justataste.com
> AI Assistance: Used CoPilot AI to help with formatting issues, specifically for the form on index.html, 
>                 asked ChatGPT for quick beakdown of all Bootstrap tags, selectors, and classes and what they mean
# RecipeBox
> Simple recipes for everyday cooking.

**Author:** delonzow | **Course/Project:** Lab-Bravo | **Version:** 1.0 | **Date:** 2026-09-21

## User Story

- **As a** home cook
- **I want** to search recipes and add my own recipes
- **So that** I can find unfamiliar dishes and share recipes with other cooks

## Narrative

RecipeBox helps home cooks browse and organize recipe ideas in one place. The intended users are people who want to discover recipes or share their own. The current version includes a hardcoded cookie recipe, search and filter controls, a sign-in interface, an admin page, and a form for adding recipe information. Future versions can connect the controls and forms to stored data and user accounts.

## Simple Tests

- [x] **TEST:** Can a user view a specific recipe?  
	**PASS:** The Toll House Chocolate Chip Cookies recipe is visible on the home page.  
	**FAIL:** The user cannot view the recipe if the home page does not load.
- [ ] **TEST:** Can a user sign in?  
	**PASS:** The user can enter a password and reach the admin page.  
	**FAIL:** Account creation and persistent authentication are not implemented.
- [ ] **TEST:** Can a user add a recipe permanently?  
	**PASS:** The user can complete the add-recipe form.  
	**FAIL:** The form does not currently save data permanently.

## Technology Stack

- HTML5
- CSS3
- JavaScript
- Bootstrap 5.0
- Bootstrap Icons
- Normalize.css
- Google Fonts
- Git and GitHub
- GitHub Pages

## Project Structure

```text
congenial-octo-potato-lab-bravo/
├── assets/
│   ├── scripts/
│   │   └── app.js
│   └── styles/
│       └── styles.css
├── pages/
│   ├── admin.html
│   └── signin.html
├── index.html
└── README.md
```

## Validation and Accessibility

- Checked the pages in a browser at desktop and mobile widths.
- Checked that navigation links, form labels, image alt text, and heading structure are present.
- Checked the HTML and CSS files for editor-reported errors.
- Confirmed that external links open in a new tab with `rel="noopener noreferrer"` where used.
- Remaining work includes a formal Lighthouse audit, full HTML validation, keyboard testing, and connecting the non-functional search and recipe form controls.

## Attribution

- **Bootstrap documentation:** Used Bootstrap grid, navbar, cards, forms, badges, and toast classes.
- **Normalize.css, Bootstrap Icons, and Google Fonts:** Loaded from their public CDNs in `styles.css`.
- **Recipe and image reference:** Toll House cookie content and image reference adapted from [Just a Taste](https://www.justataste.com/wp-content/uploads/2025/02/toll-house-cookies-stack.jpg).
- **AI assistance:** Asked GitHub Copilot to explain Bootstrap layout options, improve the recipe form and card formatting, check separation of concerns, align DOM IDs with JavaScript selectors, and review this README against the assignment criteria.
