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
