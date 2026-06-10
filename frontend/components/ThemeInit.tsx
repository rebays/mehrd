// Inline script that runs BEFORE first paint so theme + accent are applied
// without a flash. The script is small enough to inline; reading it from
// localStorage on the client would otherwise force a hydration mismatch.
const script = `
(function(){
  try {
    var r = document.documentElement;
    var t = localStorage.getItem('mehrd-theme');
    if (t) r.setAttribute('data-theme', t);
    var a = localStorage.getItem('mehrd-accent');
    if (a) r.setAttribute('data-accent', a);
  } catch (e) {}
})();
`;

export function ThemeInit() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
