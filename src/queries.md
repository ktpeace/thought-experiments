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
description = '',
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
SELECT 'some-experiment-uuid', id FROM tags WHERE name IN ('blue', 'green', 'red')
ON CONFLICT DO NOTHING;

COMMIT;

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
'paradox', 'determinist'

The Veil of Ignorance 41987198-1a6b-46b3-b485-fe34db6a1c8f
'western', 'ethics'

The Blind Men & the Elephant 28014660-3ae4-4f7e-9f1d-1ea12f220d62
'eastern'

The Deceiving Demon 645774bd-a7e6-4e1b-8885-1cd98ff475b2
'western'

The Life You Can Save ad12f7d6-f14a-46ef-893f-75337daa8344
'western', 'ethics'

modal: Note, experiments are tagged with a preference for under-related assignments over missing assignments. For example, if a thought experiment is meant to contradict a school of thought, it may be both tagged with its own school of thought and the one it was made to combat.
