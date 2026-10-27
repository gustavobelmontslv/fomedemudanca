<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep landing-page copy in src/content/landing.ts and shared color roles in src/styles.css so presentation remains consistent.
- Infinite marquees use two equal-width groups including trailing spacing to avoid jumps at the loop boundary; the continuous variant never pauses on hover and respects reduced-motion preferences.
- Purchase CTA destinations are centralized in the landing content module; only the offer-card CTA opts into checkout, so other purchase actions keep visitors on the offer.
