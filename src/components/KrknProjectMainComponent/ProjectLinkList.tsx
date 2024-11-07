import { Box, Grid, List, ListItem, Typography } from "@material-ui/core"

import {
    Link
} from '@backstage/core-components';
import React from "react";

interface LinkData {
    name: string,
    icon: string,
    link: string
}

const PROJECT_LINKS: LinkData[] = [
    {
        name: "Documentation",
        icon: "document",
        link: "https://krkn-chaos.dev/docs/"
    },
    {
        name: "Blog",
        icon: "document",
        link: "https://krkn-chaos.dev/blog/"
    },
    {
        name: "Community",
        icon: "document",
        link: "https://krkn-chaos.dev/community/"
    },
]

const ImportantLinksList = () => {
    return (
        <>
            <Typography variant="body2" component='div'>
                <Box sx={{ lineHeight: 'normal', m: 1 }}>To learn more about the project:  </Box>
            </Typography>
            <List>
                {
                    PROJECT_LINKS.map(
                        (data)=> {
                            return <ListItem>
                                <Link to={data.link}>{data.name}</Link>
                            </ListItem>
                        }
                    )
                }
            </List>
        </>
    );
}

export default ImportantLinksList