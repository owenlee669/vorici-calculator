# **Path of Exile Vorici 计算器网站战略开发与架构深度研究报告**

在《流放之路》（Path of Exile, PoE）这一深度复杂的动作角色扮演游戏中，装备系统的洗炼与优化始终是玩家的核心诉求。关键词“Vorici Calculator”不仅代表了一个技术工具，更承载了玩家对资源分配效率、概率风险管理以及游戏机制深层理解的渴望。尽管游戏版本的更迭使得名为“Vorici”的 NPC 在工艺系统中的直接角色发生了变化，但该关键词作为“洗色计算器”的代名词已深入人心 1。本报告旨在通过多维度的市场分析、算法建模以及用户行为研究，为构建一个以“Vorici Calculator”为核心的专业化站点提供详尽的执行方案。

## **核心定位：工具为魂，攻略与数据为翼**

对于一个围绕“Vorici Calculator”构建的网站，其成功的关键在于精准捕捉玩家在特定场景下的“痛点”。研究表明，玩家在搜索该关键词时，通常处于资源紧张或追求极致性价比的决策点 1。因此，网站的定位应明确为：**以深度工艺工具为核心，以机制解析攻略为支撑，以动态物价数据为参考的垂直技术型站点。**

### **工具属性的决定性地位**

工具是吸引流量并产生用户粘性的核心引擎。在 PoE 社区中，Siveran 的 GitHub 计算器虽然在算法上具有高度权威性，但其界面（UI）设计停留在较早期的技术审美阶段，缺乏现代网页的响应式体验和多维度横向对比功能 5。一个成功的站点必须在工具层面实现超越，提供不仅限于 Chromatic Orb（幻色石）洗色的计算，还应整合 Jeweller’s Method（工匠洗色法）、Tainted Orb（污染通货）概率以及针对 Path of Exile 2 的前瞻性预测工具 8。

### **攻略与数据的支撑作用**

仅有工具是不够的，玩家需要理解计算结果背后的“为什么”。通过构建高质量的攻略内容，网站可以捕获更多长尾搜索词，如“如何洗出 4 个异色插槽”或“工匠石洗色原理” 3。同时，集成来自 PoE Ninja 等平台的动态价格 API，能够让工具从“概率计算器”进化为“成本决策器”，直接告诉玩家当前最省钱的方案是直接使用幻色石还是通过工艺台特定配方 2。

## **网站基本结构与关键词页面构建方案**

构建网站结构时，应采用“中心辐射”模式。以核心计算器为中心，辐射出不同垂直领域的二级页面，形成强大的主题权威性（Topical Authority）。

### **首页与核心工具架构**

首页应承载核心主关键词“Vorici Calculator”及“PoE Chromatic Calculator”。设计上应采取工具前置的策略，确保玩家进入页面后第一眼即可看到输入框 1。

| 输入维度 | 技术逻辑与必要性 |
| :---- | :---- |
| 装备属性需求 (Str/Dex/Int) | 插槽颜色的概率分布直接取决于装备的属性门槛 16。 |
| 当前插槽数量 (1-6) | 决定了洗色过程中的总排列组合空间 15。 |
| 目标颜色配置 (R/G/B/W) | 用户最终追求的技能石镶嵌环境 4。 |
| 装备是否污染 (Corrupted) | 污染装备需要 1:1 的瓦尔石成本，且概率计算完全不同 10。 |

首页的文本内容应深入浅出地解释“洗色偏差”机制，即力量（Strength）需求越高越容易出红色插槽，敏捷（Dexterity）对应绿色，智力（Intelligence）对应蓝色 16。这种偏差是算法的核心，通过文字描述可以增强 SEO 权重。

### **专题页面 (Silo) 的关键词布局**

为了构建完整的关键词矩阵，需要针对玩家在洗色过程中可能遇到的不同情境建立专门的二级页面。

1. **工匠洗色法专题页 (Keyword: Jeweller's Method PoE / Bench Trick)** 这一页面应详细讲解如何利用工艺台反复增加和减少插槽数量来强制生成异色插槽。相比于直接使用幻色石，这种方法在追求 4 个以上异色插槽时具有极高的确定性 12。页面应包含一个交互式的“成本对比表”，实时对比工匠石与幻色石的预期消耗。  
2. **污染装备洗色专题页 (Keyword: Tainted Chromatic Orb Odds / Corrupted Item Coloring)** 污染通货（如污染幻色石）的出现彻底改变了后期装备的洗色策略。该页面必须强调：污染幻色石不视装备属性需求，每个插槽变为 R/G/B 的概率均为 1/3 10。这对于像“无感之袍”（Garb of the Ephemeral）这种极高属性需求且需要全异色插槽的装备至关重要 10。  
3. **Path of Exile 2 预研专题页 (Keyword: PoE 2 Socket System / Gem Socket Changes)** 鉴于 PoE 2 中插槽将存在于技能石而非装备上的重大变化，提前布局此类关键词可以确保网站在未来的版本迭代中保持流量 24。该页面应专注于“未切割的技能石”（Uncut Gems）及其对插槽扩充的要求 25。

## **内部页面深度设计与算法逻辑集成**

在具体设计内页时，应体现出专业领域专家的严谨性。每一个数据、每一个概率模型都应有据可查。

### **洗色算法的数学建模与解析**

网站的深度内容应包含对洗色概率模型（X-Constant）的探讨。社区广泛认可的公式为每个颜色被选中的权重等于该属性的需求值加上一个常数 ![][image1] 18。

![][image2]  
对于异色（Off-color），其权重仅为 ![][image1]。目前的实测数据表明，![][image1] 的值大约在 13 到 17 之间波动，且可能受物品等级（Item Level）的影响 18。

| 属性需求场景 | 概率计算模型 (预期结果) | 算法备注 |
| :---- | :---- | :---- |
| 纯力量需求 (200 Str) | 红色概率极高，蓝/绿为 ![][image3] 18。 | 计算时需考虑“不可重复滚出相同配置”的规则 18。 |
| 双属性需求 (100 Str / 100 Int) | 红蓝概率均等，绿色为极低概率的异色 17。 | 这种基底最适合洗出 3R3B 等组合 29。 |
| 零属性需求 (Crude Bow) | 理论上红绿蓝概率均为 1/3 18。 | 实际测试中，低等级物品可能存在隐藏权重偏移 30。 |

通过将这些复杂的数学逻辑转化为易于理解的雷达图或百分比条，内页可以提供远超竞争对手的可视化体验。

### **核心内页关键词与内容布局**

针对特定的高价值词汇，内容布局应遵循专业报告的严谨结构。

#### **插槽与连线机制深度指南 (The Definitive Guide to Sockets and Links)**

* **关键词布局：** PoE Maximum Sockets, ilvl socket restrictions, link probability math.  
* **核心内容：** 详细列出物品等级与最大插槽数的关系。例如，物品等级 1 只能有 2 个插槽，等级 35 才能有 5 个，而 6 个插槽需要等级 50 以上 19。同时整合瓦尔宝石对插槽数量的突破性影响 24。

#### **异色插槽工艺进阶 (Advanced Off-color Crafting)**

* **关键词布局：** 4 off-colors PoE, 6 off-colors cost, Best way to color Death's Oath.  
* **核心内容：** 针对特定热门物品（如死誓、大星团珠宝等）提供定制化方案。例如，死誓（Astral Plate 基底）需要极高力量需求，但玩家通常需要蓝绿插槽。此时应详细拆解“工匠洗色法”的每一个步骤，并附带视频演示或动态示意图 12。

## **用户体验 (UX) 与技术细节的极致优化**

作为一个工具类站点，用户体验即是生命线。在 2025 年的市场环境下，简单的网页表格已无法满足高阶玩家的需求。

### **现代化交互设计**

1. **剪贴板解析功能 (Clipboard Parsing)：** 玩家在游戏中按 Ctrl+C 可以复制装备信息。计算器应支持直接粘贴这些信息，自动解析出属性需求、插槽数和当前颜色 2。这可以极大减少用户手动输入的疲劳感，参考 ClipCube 和 Clipboardic 的数据抓取逻辑进行优化 15。  
2. **多方案成本横向测评：**  
   当用户输入目标颜色后，计算器应同时列出多种方案：  
   * 纯幻色石随机滚色的期望成本 1。  
   * 工艺台“至少 N 个特定颜色”配方的期望成本 1。  
   * 工匠石洗色法的期望成本 3。  
   * 配合 Omen of Blanching（变白预兆）的白洞优化成本 3。  
3. **响应式移动端适配：** 大量玩家在刷图间隙使用手机查询。网站必须在移动端实现极致流畅，工具界面应进行触控优化，避免细小的下拉菜单导致的误触 36。

### **数据采集与准确性验证**

为了保证概率模型的领先性，网站应建立一个“社区数据贡献”机制。参考 Siveran 更新公式的历史，鼓励玩家上传他们的洗色记录（特别是大规模洗色的结果），利用大数据不断修正 ![][image1] 常数的估值 15。通过这种方式，网站不仅是一个工具，更是一个研究 PoE 随机机制的学术社区。

## **PoE 2 的前瞻性布局与风险对冲**

Path of Exile 2 的技能插槽系统变化是本站面临的最大外部变量。在该系统中，插槽被移到了宝石上，而通货系统也经历了重构 24。

### **PoE 2 的技术机遇**

虽然传统的幻色石可能淡出，但宝石的插槽扩充将成为新的核心需求。

* **宝石插槽扩充工具：** 预测使用不同等级的工匠石（Lesser/Greater/Perfect Jeweller's Orb）将宝石扩充至 5 插槽或 6 插槽的概率与成本 24。  
* **符文系统 (Rune System) 协同：** PoE 2 引入了可以在装备上镶嵌的 Ezomyte Runes，这些符文提供了复杂的加成，且受插槽数量限制 24。建立一个符文组合计算器将是极佳的流量切入点。

### **SEO 词库的平滑过渡**

网站应及早建立“PoE 2 Socket Guide”频道。研究表明，老玩家在进入新游戏时仍会习惯性地搜索“PoE 2 Vorici Calculator”，即便 Vorici 本人已不在，通过将这一关键词重定向至“PoE 2 Gem Coloring & Socketing”相关内容，可以有效留存品牌资产 11。

## **结论与行动建议：构建 topical authority 的蓝图**

围绕“Vorici Calculator”构建网站，其本质是构建一个关于“洗炼概率与成本优化”的权威知识库。

**核心行动建议：**

1. **开发阶段：** 以 Siveran 的开源代码为基础，使用现代前端框架（如 React 或 Vue）重构计算器，重点开发剪贴板自动解析和多方案对比功能 7。  
2. **内容阶段：** 撰写不少于 20 篇深度攻略，覆盖工匠法、污染洗色、白洞获取以及 ilvl 对插槽的影响。每篇文章应嵌入相关工具的微型版本，提高页面停留率 10。  
3. **SEO 阶段：** 针对“Vorici Calculator”及相关幻色石计算器词汇进行内链优化。建立物品数据库，通过特定基底（如 Vaal Regalia）的需求页面吸引长尾流量 29。  
4. **变现与社区：** 通过整合 PoE Ninja 价格 API 增加实用性，并考虑通过赞助商链接（如正规游戏交易平台）或专业工艺服务招租实现变现 2。

通过这种“工具引领、攻略支撑、前瞻布局”的综合策略，该网站有望在竞争激烈的 PoE 工具市场中脱颖而出，成为全球玩家洗色决策的首选平台。在长期的运营中，应始终坚持以概率准确性为生命线，以用户操作便捷性为竞争力，不断适配游戏版本的快速更迭。

#### **引用的著作**

1. Vorici Chromatic Calculator \- Medium, 访问时间为 三月 13, 2026， [https://medium.com/@dreamquotes01/vorici-chromatic-calculator-531df9b62b9d](https://medium.com/@dreamquotes01/vorici-chromatic-calculator-531df9b62b9d)  
2. Path of Exile Tools \- PoE Vault, 访问时间为 三月 13, 2026， [https://www.poe-vault.com/guides/path-of-exile-tools](https://www.poe-vault.com/guides/path-of-exile-tools)  
3. Beginner Guide. Coloring 4 slot items CHEAPER AND FASTER\!\! : r/pathofexile \- Reddit, 访问时间为 三月 13, 2026， [https://www.reddit.com/r/pathofexile/comments/1bnob9x/beginner\_guide\_coloring\_4\_slot\_items\_cheaper\_and/](https://www.reddit.com/r/pathofexile/comments/1bnob9x/beginner_guide_coloring_4_slot_items_cheaper_and/)  
4. Vorici calculator help. : r/pathofexile \- Reddit, 访问时间为 三月 13, 2026， [https://www.reddit.com/r/pathofexile/comments/1lryr41/vorici\_calculator\_help/](https://www.reddit.com/r/pathofexile/comments/1lryr41/vorici_calculator_help/)  
5. Vorici Chromatic Calculator, 访问时间为 三月 13, 2026， [https://siveran.github.io/calc.html](https://siveran.github.io/calc.html)  
6. Which Itemfilter is the "best" ? : r/PathOfExile2 \- Reddit, 访问时间为 三月 13, 2026， [https://www.reddit.com/r/PathOfExile2/comments/1pktc28/which\_itemfilter\_is\_the\_best/](https://www.reddit.com/r/PathOfExile2/comments/1pktc28/which_itemfilter_is_the_best/)  
7. GitHub \- Siveran/siveran.github.io: Vorici Chromatic Calculator for Path of Exile, 访问时间为 三月 13, 2026， [https://github.com/Siveran/siveran.github.io](https://github.com/Siveran/siveran.github.io)  
8. I made a chromatic calculator web app for use with Vorici crafting\! It gives the chance and average chromatics used for relevant Vorici recipes versus regular crafting. : r/pathofexile \- Reddit, 访问时间为 三月 13, 2026， [https://www.reddit.com/r/pathofexile/comments/2jhc36/i\_made\_a\_chromatic\_calculator\_web\_app\_for\_use/](https://www.reddit.com/r/pathofexile/comments/2jhc36/i_made_a_chromatic_calculator_web_app_for_use/)  
9. What's the best way to get 6 off color sockets in SSF? : r/PathOfExileBuilds, 访问时间为 三月 13, 2026， [https://www.reddit.com/r/PathOfExileBuilds/comments/1ivv8pw/whats\_the\_best\_way\_to\_get\_6\_off\_color\_sockets\_in/](https://www.reddit.com/r/PathOfExileBuilds/comments/1ivv8pw/whats_the_best_way_to_get_6_off_color_sockets_in/)  
10. Tainted Chromatic Orb Odds \- PoE \- Mobalytics, 访问时间为 三月 13, 2026， [https://mobalytics.gg/poe/guides/tainted-chromatic-orb-odds](https://mobalytics.gg/poe/guides/tainted-chromatic-orb-odds)  
11. Path of Exile 1 Gameplay Help and Discussion \- PoE 2 off colour sockets \- Forum, 访问时间为 三月 13, 2026， [https://www.pathofexile.com/forum/view-thread/2685281](https://www.pathofexile.com/forum/view-thread/2685281)  
12. \[Beginner's Guide\] How to color your Sockets on POE \! : r/pathofexile \- Reddit, 访问时间为 三月 13, 2026， [https://www.reddit.com/r/pathofexile/comments/gp827b/beginners\_guide\_how\_to\_color\_your\_sockets\_on\_poe/](https://www.reddit.com/r/pathofexile/comments/gp827b/beginners_guide_how_to_color_your_sockets_on_poe/)  
13. How to Change Socket Colors | PoE Beginner Guide \- YouTube, 访问时间为 三月 13, 2026， [https://www.youtube.com/watch?v=AarvoEpCm80](https://www.youtube.com/watch?v=AarvoEpCm80)  
14. Must have third party tools? : r/pathofexile \- Reddit, 访问时间为 三月 13, 2026， [https://www.reddit.com/r/pathofexile/comments/13vjixq/must\_have\_third\_party\_tools/](https://www.reddit.com/r/pathofexile/comments/13vjixq/must_have_third_party_tools/)  
15. Vorici Chromatic Calculator (Updated October 30, 2014\) \- Forum \- Path of Exile, 访问时间为 三月 13, 2026， [https://www.pathofexile.com/forum/view-thread/1089249](https://www.pathofexile.com/forum/view-thread/1089249)  
16. PoE \- Chromatic Orbs Guide \- Mobalytics, 访问时间为 三月 13, 2026， [https://mobalytics.gg/poe/guides/chromatic-orbs](https://mobalytics.gg/poe/guides/chromatic-orbs)  
17. How do I tell what is the preferred colour of an item without using chromatic orbs? \- Reddit, 访问时间为 三月 13, 2026， [https://www.reddit.com/r/pathofexile/comments/1iwzrvm/how\_do\_i\_tell\_what\_is\_the\_preferred\_colour\_of\_an/](https://www.reddit.com/r/pathofexile/comments/1iwzrvm/how_do_i_tell_what_is_the_preferred_colour_of_an/)  
18. Chromatic Orb probabilities Spreadsheet (Update: N \= 1570\) \- Forum \- Path of Exile, 访问时间为 三月 13, 2026， [https://www.pathofexile.com/forum/view-thread/761831/page/1](https://www.pathofexile.com/forum/view-thread/761831/page/1)  
19. Item socket \- Path of Exile Wiki \- Fandom, 访问时间为 三月 13, 2026， [https://pathofexile.fandom.com/wiki/Item\_socket](https://pathofexile.fandom.com/wiki/Item_socket)  
20. Jeweller's Orb \- Path of Exile Wiki \- Fandom, 访问时间为 三月 13, 2026， [https://pathofexile.fandom.com/wiki/Jeweller%27s\_Orb](https://pathofexile.fandom.com/wiki/Jeweller%27s_Orb)  
21. My search-fu is weak. Vorici crafting and the chromatic calculator help. \- Reddit, 访问时间为 三月 13, 2026， [https://www.reddit.com/r/pathofexile/comments/dutk17/my\_searchfu\_is\_weak\_vorici\_crafting\_and\_the/](https://www.reddit.com/r/pathofexile/comments/dutk17/my_searchfu_is_weak_vorici_crafting_and_the/)  
22. How to change/get the right sockets color \[Beginner\] : r/pathofexile \- Reddit, 访问时间为 三月 13, 2026， [https://www.reddit.com/r/pathofexile/comments/13kzl5c/how\_to\_changeget\_the\_right\_sockets\_color\_beginner/](https://www.reddit.com/r/pathofexile/comments/13kzl5c/how_to_changeget_the_right_sockets_color_beginner/)  
23. Anyone help with change color on sockets on shield? \- Forum \- Path of Exile, 访问时间为 三月 13, 2026， [https://www.pathofexile.com/forum/view-thread/2164266](https://www.pathofexile.com/forum/view-thread/2164266)  
24. Path of Exile 2 Crafting Overview \- Maxroll, 访问时间为 三月 13, 2026， [https://maxroll.gg/poe2/resources/path-of-exile-2-crafting-overview](https://maxroll.gg/poe2/resources/path-of-exile-2-crafting-overview)  
25. Path of Exile 2 Gems Guide: How To Use Meta Gems \- Skycoach, 访问时间为 三月 13, 2026， [https://skycoach.gg/blog/path-of-exile-2/articles/gems-guide](https://skycoach.gg/blog/path-of-exile-2/articles/gems-guide)  
26. The Confirmed Path of Exile 2 Crafting Changes Are BIG (Talkative Tri) \- Reddit, 访问时间为 三月 13, 2026， [https://www.reddit.com/r/PathOfExile2/comments/1dgwwhp/the\_confirmed\_path\_of\_exile\_2\_crafting\_changes/](https://www.reddit.com/r/PathOfExile2/comments/1dgwwhp/the_confirmed_path_of_exile_2_crafting_changes/)  
27. Vorici Chromatic Calculator updated with new formula\! And how to help gather color data. : r/pathofexile \- Reddit, 访问时间为 三月 13, 2026， [https://www.reddit.com/r/pathofexile/comments/2kjcxe/vorici\_chromatic\_calculator\_updated\_with\_new/](https://www.reddit.com/r/pathofexile/comments/2kjcxe/vorici_chromatic_calculator_updated_with_new/)  
28. Guide to chroming with Vorici : r/pathofexile \- Reddit, 访问时间为 三月 13, 2026， [https://www.reddit.com/r/pathofexile/comments/2hszno/guide\_to\_chroming\_with\_vorici/](https://www.reddit.com/r/pathofexile/comments/2hszno/guide_to_chroming_with_vorici/)  
29. Is there a way to get desired socket colors in act 4? : r/pathofexile \- Reddit, 访问时间为 三月 13, 2026， [https://www.reddit.com/r/pathofexile/comments/15e08mt/is\_there\_a\_way\_to\_get\_desired\_socket\_colors\_in/](https://www.reddit.com/r/pathofexile/comments/15e08mt/is_there_a_way_to_get_desired_socket_colors_in/)  
30. PSA: Dont trust the Vorici Calculator Numbers when trying to chrome a Crude Bow \- Reddit, 访问时间为 三月 13, 2026， [https://www.reddit.com/r/pathofexile/comments/52ktaw/psa\_dont\_trust\_the\_vorici\_calculator\_numbers\_when/](https://www.reddit.com/r/pathofexile/comments/52ktaw/psa_dont_trust_the_vorici_calculator_numbers_when/)  
31. PSA: You can get a 5 link for way cheaper than buying a Greater Jeweler's Orb \-- here's how. : r/PathOfExile2 \- Reddit, 访问时间为 三月 13, 2026， [https://www.reddit.com/r/PathOfExile2/comments/1hbjt0y/psa\_you\_can\_get\_a\_5\_link\_for\_way\_cheaper\_than/](https://www.reddit.com/r/PathOfExile2/comments/1hbjt0y/psa_you_can_get_a_5_link_for_way_cheaper_than/)  
32. Path of Exile: How to Get Off-Color Gem Sockets at the Crafting Bench \- YouTube, 访问时间为 三月 13, 2026， [https://www.youtube.com/watch?v=kCXZkv7E9tE](https://www.youtube.com/watch?v=kCXZkv7E9tE)  
33. how do you get the colours you want? : r/PathOfExileBuilds \- Reddit, 访问时间为 三月 13, 2026， [https://www.reddit.com/r/PathOfExileBuilds/comments/sh3p5y/how\_do\_you\_get\_the\_colours\_you\_want/](https://www.reddit.com/r/PathOfExileBuilds/comments/sh3p5y/how_do_you_get_the_colours_you_want/)  
34. Noob question about socket color probabilities using chromatics: : r/pathofexile \- Reddit, 访问时间为 三月 13, 2026， [https://www.reddit.com/r/pathofexile/comments/em16ad/noob\_question\_about\_socket\_color\_probabilities/](https://www.reddit.com/r/pathofexile/comments/em16ad/noob_question_about_socket_color_probabilities/)  
35. What is the most efficient way to make this item 3 green and 3 red? : r/PathOfExileBuilds, 访问时间为 三月 13, 2026， [https://www.reddit.com/r/PathOfExileBuilds/comments/1pir6mm/what\_is\_the\_most\_efficient\_way\_to\_make\_this\_item/](https://www.reddit.com/r/PathOfExileBuilds/comments/1pir6mm/what_is_the_most_efficient_way_to_make_this_item/)  
36. Top UX/UI Design Tools (2025) \- Sessions College, 访问时间为 三月 13, 2026， [https://www.sessions.edu/notes-on-design/top-ux-ui-design-tools-for-2025/](https://www.sessions.edu/notes-on-design/top-ux-ui-design-tools-for-2025/)  
37. The Best UI Design Tools in 2025 \- DBETA Agency, 访问时间为 三月 13, 2026， [https://www.dbeta.co.uk/blog/best-ui-design-tools-2025.html](https://www.dbeta.co.uk/blog/best-ui-design-tools-2025.html)  
38. The current state of Greater and Perfect Jeweller's Orb drop rate : r/pathofexile \- Reddit, 访问时间为 三月 13, 2026， [https://www.reddit.com/r/pathofexile/comments/1hg6t9o/the\_current\_state\_of\_greater\_and\_perfect/](https://www.reddit.com/r/pathofexile/comments/1hg6t9o/the_current_state_of_greater_and_perfect/)  
39. Rune System Guide \- Throne and Liberty \- Maxroll.gg, 访问时间为 三月 13, 2026， [https://maxroll.gg/throne-and-liberty/resources/rune-system-guide](https://maxroll.gg/throne-and-liberty/resources/rune-system-guide)  
40. Socket Colours Removed? \- Path of Exile 2 : r/pathofexile \- Reddit, 访问时间为 三月 13, 2026， [https://www.reddit.com/r/pathofexile/comments/1db53ij/socket\_colours\_removed\_path\_of\_exile\_2/](https://www.reddit.com/r/pathofexile/comments/1db53ij/socket_colours_removed_path_of_exile_2/)  
41. Changing sockets color : r/pathofexile \- Reddit, 访问时间为 三月 13, 2026， [https://www.reddit.com/r/pathofexile/comments/h992l5/changing\_sockets\_color/](https://www.reddit.com/r/pathofexile/comments/h992l5/changing_sockets_color/)

[image1]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAZCAYAAAA8CX6UAAAA7klEQVR4Xu2SMQtBYRSGX0lRilKUgQw2s/IrDEoGg7KaDFZkYbZIViUD2fwAu9FkM1nMMvAex617b67u7RrvU8/ynfOdvu+cAwR4JU77dG4zSlN0Yjsf0+T7po0wTdMqvdInHX5iEVqnD3qkTZqloU/ckQq90xM0uUdn0IKeiNE99FU1uqQJS4YHOtBCG/goIhToBfpNXxTpmQ5s557I0wPtQhuesYbdIf1Y0zJ0t6RPDUuGC6TIFjopAykkE5RJukJ2ZEpbsC6aNPxGS6YzR2RCO7qCbriZBfRVI/zY5DY0yaxcNMh9icurAwL+zgvAzC3aaPRIZAAAAABJRU5ErkJggg==>

[image2]: <data:image/png;base64,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>

[image3]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAWCAYAAACG9x+sAAACBElEQVR4Xu2XTShmURjH/xo0QjKbGVl4B5HFNCPNlEb5KDWzkFKEYqPMRkjZWPhYWMxCMSVhZcNG2Vq+O2pKKaWwRDZSaqbY8H8853DPea+3Sal7J7/6xX2e8957zj3n3Ptc4HnJpIN0yThHE7TKHM/TSts4qryiffQvbTQxGdgALbCNos5buk8naQYddrIx4Rd0EP20y8vFglp6RX9CZyF2fKEXdA26B2JDCV2AbtjgXogF7+iM+WuxeyHSyHN+nV7TU1pt4k30iN7QdhN74YWosEfPYug9H2Pq/4lUkA30tReXEiBB65Caeyz+r2RBH7dl0Ov72JJc/ESLoO+YFAqgjcboOW0zcen8KJ2iH+gGtDywubC4j7TL9oOkgi7SGmilugN9gwdphtZSPdDziBNOC0MHPTH/t9BL6FoboUmaZ3JysUPoS0tyYXEfuWvdfhB61+W6Mgul0Jdfp9NC+QGtp+T7YgjaPi3TdBs6K1ICJOF29Jh+NrmwuM9jAxCkM8V0GVo7hXXuPfTcMstheYdyukvrzfEKUgfwBzpLkguL+6QbwBvaCv3sHKc5bvqOBLSOsjc1LavQ2sXylBn4Cv2NdYseBI5l3efDpZD+prNwvxtkgLLmv0OX9bdALoVcPKxhebJIGfxce0C+DeTh0AvtsJwnabTnFGRZycaWmdmE+a64BWF0j3UHSrSRAAAAAElFTkSuQmCC>