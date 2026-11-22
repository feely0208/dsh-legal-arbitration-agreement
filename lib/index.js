import { createPlugin, pkgRootFrom } from '@deepwhale-cn/dsh-guard-core/plugin';

export const { name, inject, apply } = createPlugin({
  name: 'legal-arbitration-agreement',
  pkgRoot: pkgRootFrom(import.meta.url),
  skillFile: 'skill/legal-arbitration-agreement.md',
  binFile: 'bin/cli.mjs',
  description: "仲裁法16/17条 要件审查",
  whenToUse: "需要对「仲裁协议有效性检查」相关项目做自查时使用。",
});
