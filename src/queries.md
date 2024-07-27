These queries can be entered in the Vercel site by clicking on this project and navigating to Storage -> Data -> Query.

## Add an experiment

INSERT INTO experiments (
no_votes,
yes_votes,
question,
alt,
origin,
origin_link,
image_url,
slug,
title,
description
) VALUES (
0, -- no_votes
0, -- yes_votes
'Is he right to suspect the mare of wanting his soup?', -- question
'Old man eating soup', -- alt
'Mark Kent', -- origin
'http://example.com', -- origin_link
'http://vercel.com/image', -- image_url
'soup-man', -- slug
'Soup Man', -- title
'An old man is eating soup and sees a black mare.' -- description
);

## Update an experiment (just copy the parts you want to change)

UPDATE experiments
SET
title = '',
description = '',
question = '',
alt = '',
origin = '',
origin_link = '',
image_url = '',
slug = ''
WHERE id = '';

UPDATE experiments
SET
title = '',
description = 'A monster has appeared in the countryside. This monster has a unique quality: its potential for enjoyment vastly outweighs that of any other living thing.\n\nJust as a dog's sense of smell is over 10,000 times stronger than ours, the monster's joy from eating a cupcake (for example) is more intense than the same joy ten billion cupcake-loving humans combined would experience. The same goes for our suffering: its capacity for suffering is tens of billions times deeper.',
question = '',
alt = '',
origin = '',
origin_link = '',
image_url = '',
slug = ''
WHERE id = '';

# Add a column

ALTER TABLE experiments
ADD COLUMN new_column VARCHAR(255);

<!--Or whatever data type you need-->

# Add tags

<!-- To ensure atomicity, wrap the operations in a transaction: -->

BEGIN;

-- Insert tags (skip duplicates)
INSERT INTO tags (name)
VALUES ('blue'), ('green'), ('red')
ON CONFLICT (name) DO NOTHING;

-- Insert into junction table, avoid duplicates
INSERT INTO experiment_tags (experiment_id, tag_id)
SELECT 'some-experiment-uuid', id FROM tags WHERE name IN ('blue', 'green', 'red')
ON CONFLICT DO NOTHING;

COMMIT;

BEGIN;

-- Insert tags (skip duplicates)
INSERT INTO tags (name)
VALUES ('paradox'), ('utilitarianism'), ('nihilism'), ('existentialism'), ('stoicism'), ('hedonism'), ('rationalism'), ('relativism'), ('idealism'), ('greek'), ('western'), ('eastern'), ('ethics'), ('logic'), ('qualia'), ('religious'), ('physicalism'), ('epiphenomenalism'), ('obscure'), ('ontology'), ('epistemology'), ('semantic externalism'), ('mathematics'), ('analytics'), ('probability'), ('dualism'), ('monism'), ('apologetics')
ON CONFLICT (name) DO NOTHING;

-- Insert into junction table, avoid duplicates
INSERT INTO experiment_tags (experiment_id, tag_id)
SELECT 'some-experiment-uuid', id FROM tags WHERE name IN ('famous')
ON CONFLICT DO NOTHING;

COMMIT;

INSERT INTO experiment_tags (experiment_id, tag_id)
SELECT '97d56e6f-e08a-42a0-a3bf-7e23acf8e6c8', id FROM tags WHERE name IN ('ethics')
ON CONFLICT DO NOTHING;

The Trolley Problem 97d56e6f-e08a-42a0-a3bf-7e23acf8e6c8
'ethics', 'western', 'utilitarian'

The Sorites Paradox 4512534b-0158-4449-bdb9-b5ddff14f745
'paradox', 'western'

Mary's Room 6ad043a5-cc20-4d5d-b93f-b24f487bca22
'qualia', 'western'

The Ship of Theseus 4f775de5-b189-43bd-91ce-58002456cc23
'paradox', 'identity', 'western'

The Experience Machine 660efae6-2b07-4ef1-a8f7-2dccf95bdb96

Buridan's Ass dc8ae0da-6213-4c96-b1c0-e9e320fc1213
'paradox', 'determinism'

The Veil of Ignorance 41987198-1a6b-46b3-b485-fe34db6a1c8f
'western', 'ethics'

The Blind Men & the Elephant 28014660-3ae4-4f7e-9f1d-1ea12f220d62
'eastern'

The Deceiving Demon 645774bd-a7e6-4e1b-8885-1cd98ff475b2
'western'

The Life You Can Save ad12f7d6-f14a-46ef-893f-75337daa8344
'western', 'ethics'

f9c43820-f231-4c4d-98b6-4538291513dc Clifford's Shipowner
19ed0d14-ce44-433c-a084-a9fa7e6eb9ac Pascal's Wager
622690cf-62e2-46c2-99fa-924cf1bafd67 Beetle in a Box
194c52a2-b2e3-4307-873c-e20ae280ddcd The Imaginary Gardener
48f63b91-b4b7-465b-b47c-3d355a6a1286 What Is It Like to Be a Bat?
fbf23a61-bb5b-4634-83e2-fab586196231 The Cow That Wants to be Eaten
9198fe2f-6f95-4057-9857-d0ce298eac98 The Chinese Room
a7f03855-ceb9-4920-892d-47ddd8d15888 The Utility Monster
9e00eea0-6fef-4f43-ba83-7a5b24cf6bf7 Thomson's Violinist
e2cce4f8-ff9a-4dfe-bbb3-0f898a555499 The Ticking Time Bomb

modal: Note, experiments are tagged with a preference for under-related assignments over missing assignments. For example, if a thought experiment is meant to contradict a school of thought, it may be both tagged with its own school of thought and the one it was made to combat.
