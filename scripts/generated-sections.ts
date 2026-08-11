const GREAT_FRONTEND_ORIGIN = 'https://www.greatfrontend.com';

export function normalizeTldrForReadme(content: string): string {
  return content.replaceAll('](/', `](${GREAT_FRONTEND_ORIGIN}/`);
}

export function replaceGeneratedSection(
  source: string,
  startName: string,
  endName: string,
  content: string,
): string {
  const startMarker = `<!-- ${startName} -->`;
  const endMarker = `<!-- ${endName} -->`;
  const startIndex = source.indexOf(startMarker);

  if (startIndex < 0) {
    throw new Error(`Missing generated section marker: ${startMarker}`);
  }

  const contentStart = startIndex + startMarker.length;
  const endIndex = source.indexOf(endMarker, contentStart);

  if (endIndex < 0) {
    throw new Error(`Missing generated section marker: ${endMarker}`);
  }

  return `${source.slice(0, contentStart)}\n\n${content}\n\n${source.slice(endIndex)}`;
}
