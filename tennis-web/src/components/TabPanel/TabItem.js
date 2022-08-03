import React from "react";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { KidDrill, TeenDrill, ExtraDrill } from "../VideoList/VideoList";

function TabItem({ drill }) {
    if (drill === "kid") {
        return (
            <div className="section">
                {KidDrill.map((k) => (
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="iframe"
                            height="245"
                            src={`https://www.youtube.com/embed/${k.id}`} />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {k.title}
                            </Typography>
                        </CardContent>
                    </Card>
                )
                )}
            </div>
        )
    }

    if (drill === "teen") {
        return (
            <div className="section">
                {TeenDrill.map((t) => (
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="iframe"
                            height="245"
                            src={`https://www.youtube.com/embed/${t.id}`} />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {t.title}
                            </Typography>
                        </CardContent>
                    </Card>
                )
                )}
            </div>
        )
    }

    if (drill === "extra") {
        return (
            <div className="section">
                {ExtraDrill.map((e) => (
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="iframe"
                            height="245"
                            src={`https://www.youtube.com/embed/${e.id}`} />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {e.title}
                            </Typography>
                        </CardContent>
                    </Card>
                )
                )}
            </div>
        )
    }
}

export default TabItem;