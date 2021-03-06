import {Node, ElementNode, TextNode, AnchorNode} from '../node';

export abstract class Formatter {

  public format(node: Node): string {
    if (node instanceof ElementNode) {
      return this.formatElement(node);
    } else if (node instanceof TextNode) {
      return this.formatText(node);
    } else if (node instanceof AnchorNode) {
      return this.formatAnchor(node);
    }
  }

  abstract formatElement(node: ElementNode): string;
  abstract formatText(node: TextNode): string;
  abstract formatAnchor(node: AnchorNode): string;
}

export class DefaultFormatter extends Formatter {
  formatElement(node: ElementNode): string {
    var res = `<${node.tag}`;
    if (node.attribs.size > 0) {
      node.attribs.forEach((value, key) => {
        if (key != 'data-ngid')
          res += ` ${key}="${value}"`;
      });
    }
    res += '>';
    node.children.forEach(child => { res += this.format(child); });
    res += `</${node.tag}>`;
    return res;
  }

  formatText(node: TextNode): string {
    return node.value;
  }

  formatAnchor(node: AnchorNode): string {
    return '';
  }
}