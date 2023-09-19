// 频道对象
export type ChannelItem = {
    id: number;
    name: string;
  };
  
  // 频道接口响应数据
  export type ChannelResData = {
    data: {
      channels: ChannelItem[];
    };
    message: string;
  };
  

  // 文章对象
export type ArticleItem = {
    art_id: string;
    aut_id: string;
    aut_name: string;
    comm_count: number;
    cover: {
      cover: number;
      images: string[];
    };
    is_top: number;
    pubdate: string;
    title: string;
  };
  
  // 文章接口响应数据
  export type ArticleResData = {
    data: {
      pre_timestamp: string;
      results: ArticleItem[];
    };
    message: string;
  };
  