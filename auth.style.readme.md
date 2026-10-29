Authentication UI Styles — Soft Aurora Glass
This document defines the shared visual style for the project's authentication pages. Use it as the styling source of truth for Login, Register, Forgot Password, Reset Password, Email Verification, and other auth-related screens.
Core rule: Reuse the same layout and visual tokens across auth pages. Change the page content and behavior, not the overall visual language.

1. Theme at a glance
- Theme name: Soft Aurora Glass
- Look and feel: Light, modern, welcoming, soft gradients, translucent surfaces, subtle depth
- Framework: React + Tailwind CSS
- Main colors: Slate, blue, indigo, with restrained purple ambient accents
- Layout: Vertically and horizontally centered form card on a full-screen background
- Card style: Translucent white, blurred backdrop, white border, large rounded corners, blue-tinted shadow
- Primary action: Full-width blue-to-indigo gradient button
2. Color palette and tokens
   Purpose	Classes / value	Usage guidance
   Page gradient	bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100	Use on every auth page
   Ambient blue glow	bg-blue-400/30	Large, blurred top-left blob
   Ambient indigo glow	bg-indigo-400/30	Large, blurred bottom-right blob
   Ambient purple glow	bg-purple-300/20	Smaller, blurred upper-right blob
   Main text	text-slate-900	Headings and entered input text
   Labels	text-slate-700	Form field labels
   Secondary text	text-slate-500	Descriptions and helper text
   Footer text	text-slate-600	Supporting text below forms
   Muted icons	text-slate-400	Input icons and secondary controls
   Input border	border-slate-200	Default input outline
   Input background	bg-slate-50	Default field surface
   Card surface	bg-white/80	Main translucent auth card
   Card border	border-white/60	Subtle card edge
   Brand gradient	bg-gradient-to-br from-blue-500 to-indigo-600	Brand icon container
   Primary button gradient	bg-gradient-to-r from-blue-600 to-indigo-600	Main form action
   Link default	text-blue-600	Navigation and secondary actions
   Link hover	hover:text-blue-800	Navigation and secondary actions
   Error / weak	rose-400	Validation and weak-password accents
   Warning / medium	amber-400	Intermediate password-strength accent
   Success / strong	emerald-500	Success and strong-password accents


Keep the core palette consistent. Do not introduce new accent colors unless a product requirement calls for them; document any new color and use it consistently.
3. Page background and ambient decoration
   Base page wrapper
<div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 px-4 py-12">
Ambient blobs
Use three non-interactive, softly blurred circles behind the content:
<div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-400/30 blur-3xl" />
<div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-indigo-400/30 blur-3xl" />
<div className="pointer-events-none absolute right-1/4 top-1/4 h-64 w-64 rounded-full bg-purple-300/20 blur-3xl" />
Rules:
- Keep blobs decorative and non-interactive with pointer-events-none.
- Use low-opacity colors and blur-3xl so decoration stays subtle.
- Keep blobs behind the card and avoid additional shapes that compete with the form.
- Preserve overflow-hidden to prevent the blurred circles from creating horizontal scrollbars.
4. Layout and auth card
Content width
<div className="relative w-full max-w-md">
Use max-w-md (28rem) for the standard auth card. Keep the card centered. For unusually long forms, let the page scroll naturally rather than forcing a fixed height.
Card surface
<div className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-[0_20px_60px_-15px_rgba(30,64,175,0.25)] backdrop-blur-xl sm:p-10">
Rules:
- Outer radius: rounded-3xl.
- Surface: bg-white/80 with backdrop-blur-xl.
- Border: border border-white/60.
- Padding: p-8 sm:p-10.
- Shadow: use the existing blue-tinted custom shadow.
- Avoid stacking multiple card surfaces or adding strong borders/shadows.
5. Typography and header
Page header
- Header wrapper: mb-8 text-center.
- Icon wrapper: mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/30.
- Icon: h-7 w-7 text-white, with a consistent outline style and approximately strokeWidth={1.8}.
- Heading: text-3xl font-bold tracking-tight text-slate-900.
- Description: mt-2 text-sm text-slate-500.
Use the same header arrangement and typography on every auth page. Change the title, description, and icon only when appropriate for the page's purpose.
Form labels and helper text
Label:        mb-1.5 block text-sm font-medium text-slate-700
Helper text:  mt-2 text-xs text-slate-500
Footer text:  text-sm text-slate-600
Use visible labels above fields; placeholders are examples, not replacements for labels. Use sentence case for labels and buttons.
6. Inputs and field spacing
Standard input
w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4
text-slate-900 placeholder-slate-400 outline-none transition
focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10
For a password field with a trailing visibility button, use pr-12 instead of pr-4 to leave room for the control.
Input icon
pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400
Use h-5 w-5 for field icons and a consistent outline stroke. Ensure decorative icons do not intercept pointer events.
Spacing
- Form stack: space-y-5.
- Label-to-input gap: mb-1.5.
- Input vertical padding: py-3.
- Input corner radius: rounded-xl.
- Field icons: h-5 w-5.
Keep input height, label spacing, icon alignment, border radius, and focus states consistent across pages.
7. Primary button
Shared primary action style
group relative w-full overflow-hidden rounded-xl
bg-gradient-to-r from-blue-600 to-indigo-600
py-3.5 font-semibold text-white
shadow-lg shadow-blue-500/30 transition
hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/40
focus:outline-none focus:ring-4 focus:ring-blue-500/30
active:translate-y-0 active:scale-[0.99]
Rules:
- Primary actions are full width.
- Use the same blue-to-indigo gradient, font weight, radius, and shadow on every page.
- Keep hover motion subtle; do not give each page a different button animation.
- Keep visible keyboard focus styling.
- Define clear disabled and loading states and prevent duplicate submissions while a request is pending.
Optional shine effect
The current register button uses a subtle shine on hover. If retained, use the same effect for all primary auth buttons:
absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full
The shine is decorative and must not block button interaction.
8. Links and footer
Link style
font-semibold text-blue-600 transition hover:text-blue-800 hover:underline
Footer wrapper
mt-6 text-center text-sm text-slate-600
Use these for Login/Register cross-links, Forgot Password, Return to Login, and Resend Verification. Keep secondary actions visually quieter than the primary submit button.
9. Password-specific styling
Show/hide password control
absolute right-2 top-1/2 -translate-y-1/2 rounded-lg p-2
text-slate-400 transition hover:bg-slate-100 hover:text-slate-600
- Use an accessible label that changes between “Show password” and “Hide password”.
- The control should be a real button with type="button" so it does not submit the form.
Strength meter
- Container: mt-2.5 flex gap-1.5.
- Segment: h-1.5 flex-1 rounded-full transition-colors duration-300.
- Inactive segment: bg-slate-200.
- Weak accent: bg-rose-400.
- Intermediate accent: bg-amber-400.
- Strong accent: bg-emerald-500.
Ensure the meter's labels and thresholds match the project's actual password policy. Length alone is only a rough indicator of password strength.
10. Auth page consistency matrix
Page	Shared visual structure	Page-specific content
Login	Background, ambient blobs, card, header, input, button, footer	Email, password, forgot-password link, login action
Register	Same shared structure	Name, email, password, optional strength meter, create-account action
Forgot Password	Same shared structure	Email field, send-reset-link action, return-to-login link
Reset Password	Same shared structure	New password, confirmation, reset action
Email Verification	Same shared structure	Verification status, resend action, return link
Auth Success / Error	Same palette and card treatment	Clear status icon, message, next action


Do not redesign the layout per route without a product-level reason. Keep differences focused on content and functionality.
11. Recommended reusable components
    Prefer shared components or style constants over copying long class strings into every page. Suggested component responsibilities:
- AuthLayout — full-screen gradient and ambient blobs.
- AuthCard — centered card, width, surface, border, and shadow.
- AuthHeader — icon container, heading, description.
- AuthInput — label, input, optional leading icon, helper/error message.
- PasswordInput — password field and show/hide control.
- PrimaryButton — shared gradient button and interaction states.
- AuthFooter — supporting text and auth navigation links.
- AuthFeedback — consistent success, warning, and error messages.
  Allow page-specific labels, icons, content, and handlers through props, while keeping the shared visual tokens centralized.
12. Accessibility and responsive behavior
- Use semantic forms and connect each <label> to its input with matching htmlFor and id.
- Use appropriate input types and autocomplete values.
- Keep keyboard focus visible and keyboard navigation functional.
- Give icon-only controls accessible names.
- Do not rely on color alone to explain errors, success, or password strength.
- Ensure muted text and translucent surfaces remain readable with sufficient contrast.
- Preserve px-4, responsive card padding, and a scrollable page on small screens.
- Respect reduced-motion preferences for nonessential animation.
- Show validation messages close to the relevant field and ensure they do not break the layout.
13. Before merging an auth page
- [ ] Uses the shared page background and ambient decorations.
- [ ] Uses the same centered max-w-md card layout.
- [ ] Uses the same translucent card, radius, border, blur, and shadow.
- [ ] Uses the shared header and typography hierarchy.
- [ ] Uses consistent field spacing, input radius, icon placement, and focus ring.
- [ ] Uses the shared primary button and interaction states.
- [ ] Uses the shared link and footer styles.
- [ ] Has coherent validation, loading, error, and success states.
- [ ] Works on narrow viewports and supports keyboard/screen-reader use.
- [ ] Updates this file if a deliberate theme change is introduced.
14. Change policy
    Treat this file as the source of truth for auth-page appearance. When the design changes:
1. Update the relevant tokens and class patterns here.
2. Update the shared component or style constant where the style is implemented.
3. Apply the change consistently across all auth routes.
4. Check responsive, interaction, validation, and accessibility states.
   Final rule: Reuse the visual system; customize only the page content and behavior.