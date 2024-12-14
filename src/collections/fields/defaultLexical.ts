import { Config } from "payload";
import {
  BoldFeature,
  ItalicFeature,
  LinkFeature,
  ParagraphFeature,
  lexicalEditor,
  UnderlineFeature,
  HeadingFeature,
  FixedToolbarFeature,
  InlineToolbarFeature,
  HorizontalRuleFeature,
  StrikethroughFeature,
  SubscriptFeature,
  SuperscriptFeature,
  UnorderedListFeature,
  OrderedListFeature,
} from "@payloadcms/richtext-lexical";

export const defaultLexical: Config["editor"] = lexicalEditor({
  features: () => {
    return [
      BoldFeature(),
      ItalicFeature(),
      UnderlineFeature(),
      StrikethroughFeature(),
      SubscriptFeature(),
      SuperscriptFeature(),
      ParagraphFeature(),
      HeadingFeature({ enabledHeadingSizes: ["h2"] }),
      UnorderedListFeature(),
      OrderedListFeature(),
      LinkFeature(),
      HorizontalRuleFeature(),
      InlineToolbarFeature(),
      FixedToolbarFeature(),
    ];
  },
});
