import React from 'react';

interface MarkdownNode {
  type: 'heading' | 'paragraph' | 'code' | 'codeblock';
  level?: number;
  content: string;
}

function parseMarkdown(md: string): MarkdownNode[] {
  const lines = md.split('\n');
  const nodes: MarkdownNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Code block
    if (line.startsWith('```')) {
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // skip closing ```
      nodes.push({ type: 'codeblock', content: codeLines.join('\n') });
      continue;
    }

    // Headings
    const headingMatch = line.match(/^(#{1,3})\s+(.+)/);
    if (headingMatch) {
      nodes.push({
        type: 'heading',
        level: headingMatch[1].length,
        content: headingMatch[2],
      });
      i++;
      continue;
    }

    // Empty line
    if (line.trim() === '') {
      i++;
      continue;
    }

    // Paragraph - collect consecutive non-empty lines
    const paraLines: string[] = [line];
    i++;
    while (i < lines.length && lines[i].trim() !== '' && !lines[i].startsWith('#') && !lines[i].startsWith('```')) {
      paraLines.push(lines[i]);
      i++;
    }
    nodes.push({ type: 'paragraph', content: paraLines.join(' ') });
  }

  return nodes;
}

function renderInline(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  // Match **bold**, `code`, and plain text
  const regex = /(\*\*(.+?)\*\*)|(`(.+?)`)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    if (match[2]) {
      parts.push(React.createElement('strong', { key: match.index, className: 'font-semibold text-[#0f172a] dark:text-[#f1f5f9]' }, match[2]));
    } else if (match[4]) {
      parts.push(React.createElement('code', { key: match.index, className: 'px-1.5 py-0.5 rounded bg-[#f0f1f5] dark:bg-[#1e2130] text-[#1d4ed8] text-[13px] font-mono' }, match[4]));
    }
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}

export function renderMarkdown(md: string): React.ReactNode[] {
  const nodes = parseMarkdown(md);

  return nodes.map((node, i) => {
    switch (node.type) {
      case 'heading': {
        const tag = `h${node.level}` as keyof JSX.IntrinsicElements;
        const classes =
          node.level === 1
            ? 'text-2xl font-bold mb-4 mt-8 first:mt-0'
            : node.level === 2
            ? 'text-xl font-bold mb-3 mt-6'
            : 'text-lg font-semibold mb-2 mt-5';
        return React.createElement(tag, { key: i, className: classes }, renderInline(node.content));
      }
      case 'paragraph':
        return React.createElement('p', { key: i, className: 'text-[#6b7280] dark:text-[#9ca3af] leading-relaxed mb-4' }, renderInline(node.content));
      case 'codeblock':
        return React.createElement(
          'pre',
          { key: i, className: 'bg-[#f0f1f5] dark:bg-[#1e2130] rounded-lg p-4 mb-4 overflow-x-auto' },
          React.createElement('code', { className: 'text-sm font-mono text-[#1a1d27] dark:text-[#e2e8f0]' }, node.content)
        );
      default:
        return null;
    }
  });
}
