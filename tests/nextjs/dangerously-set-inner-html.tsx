import DOMPurify from "dompurify";

export function Comment({ body }: { body: string }) {
  // ruleid: nextjs-dangerously-set-inner-html-dynamic
  return <div dangerouslySetInnerHTML={{ __html: body }} />;
}

export function SafeStatic() {
  // ok: nextjs-dangerously-set-inner-html-dynamic
  return <div dangerouslySetInnerHTML={{ __html: "<b>static</b>" }} />;
}

export function SafeSanitized({ body }: { body: string }) {
  // ok: nextjs-dangerously-set-inner-html-dynamic
  return <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(body) }} />;
}
